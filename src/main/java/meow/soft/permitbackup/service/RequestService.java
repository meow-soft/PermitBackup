package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import meow.soft.permitbackup.domain.Customer;
import org.apache.commons.io.FilenameUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.http.client.ClientHttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.client.RequestCallback;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Collections;


@Service
@RequiredArgsConstructor
@Slf4j
public class RequestService {

    public static final String API_REMOTE_BACKUP_GET = "/api/RemoteBackup/Get";
    public static final String API_REMOTE_BACKUP_CREATE_BACKUP_MQ = "/api/RemoteBackup/CreateBackupMq";
    public static final String MVC_PUBLIC_AUTH_LOGON = "/api/Auth/v1/login";
    private static final String SAVE_FOLDER_KEY = "saveFolder";
    public static final String UTF8_BOM = "\uFEFF";

    @Value("${permit.username}")
    private String login;
    @Value("${permit.password}")
    private String pass;

    private final CustomerService customerService;
    private final ConfigService configService;

    public void getToken(Customer customer) {
        log.info(String.format(">>> GetToken for customer %s", customer.getDbName()));
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Accept", "*/*");
        JSONObject json = new JSONObject();
        json.put("username", login);
        json.put("password", pass);
        String url = customer.getUrl();
        log.info(String.format("Customer url is %s", customer.getUrl()));
        if (url == null || url.isEmpty()) {
            return;
        }
        HttpEntity<String> requestEntity = new HttpEntity<>(json.toString(), headers);
        ResponseEntity<String> responseEntity;
        try {
            responseEntity = rest.exchange(url + MVC_PUBLIC_AUTH_LOGON, HttpMethod.POST, requestEntity, String.class);
        } catch (Exception e) {
            log.error("Error on send request.", e);
            log.info("<<< GetToken");
            return;
        }

        String body = removeUTF8BOM(responseEntity.getBody());
        System.out.println(body);
        JSONObject jo = new JSONObject(body.trim());
        String token = jo.get("authToken").toString();
        customer.setToken(token);
        customerService.save(customer);
        log.info("<<< GetToken");
    }

    public void RequestForCreateBackup(Customer customer) {
        log.info(String.format(">>> RequestForCreateBackup for Customer %s", customer.getDbName()));
        //todo add urlbuilder
        String url = customer.getUrl() + API_REMOTE_BACKUP_CREATE_BACKUP_MQ + "/" + customer.getDbName() + "/" + customer.getId();
        if (customer.getToken() == null || customer.getToken().isEmpty()) {
            getToken(customer);
        }


        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Accept", "*/*");
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + customer.getToken());
        HttpEntity<String> requestEntity = new HttpEntity<>(null, headers);
        log.info(String.format("Send request on %s", url));
        try {
            ResponseEntity<String> responseEntity = rest.exchange(url, HttpMethod.GET, requestEntity, String.class);
            log.debug(String.format("Response: %s", responseEntity));
            log.info(String.format("Response: %s", responseEntity.getBody()));
        } catch (Exception e) {
            log.error("Error on send request.", e);
        }
        log.info("<<< RequestForCreateBackup");
    }

    public void getFile(String filenameB64, Customer customer) {
        log.info(String.format("getFile for Customer %s", customer.getDbName()));
        if (customer.getToken() == null || customer.getToken().isEmpty()) {
            getToken(customer);
        }
        String savePath = configService.getByKey(SAVE_FOLDER_KEY).getValue();
        if (savePath == null || savePath.isEmpty()) {
            log.error("Save Path is not configured!");
            log.info("<<< getFile");
            return;
        }
        String url = customer.getUrl() + API_REMOTE_BACKUP_GET + "/" + filenameB64;

        RestTemplate restTemplate = new RestTemplate();
        RequestCallback requestCallback = request -> request.getHeaders().add(HttpHeaders.AUTHORIZATION, "Bearer " + customer.getToken());

        try {
            log.info(String.format("Send request on %s", url));
            File execute = restTemplate.execute(url, HttpMethod.GET, requestCallback, clientHttpResponse -> {
                String destFileName = clientHttpResponse.getHeaders().getContentDisposition().getFilename();
                String concat = FilenameUtils.concat(savePath, destFileName);
                log.info(String.format("Destination file path: %s", concat));
                File ret = new File(concat);
                StreamUtils.copy(clientHttpResponse.getBody(), Files.newOutputStream(ret.toPath()));
                return ret;
            });
            if (execute != null && execute.exists()) {
                log.info("File successfully saved!");
            } else {
                log.error("FILE NOT SAVED");
            }
        } catch (Exception e) {
            log.error("Error on get file.", e);
        }
        log.info("<<< getFile");
    }


    private static String removeUTF8BOM(String s) {
        if (s.startsWith(UTF8_BOM)) {
            s = s.substring(1);
        }
        return s;
    }
}
