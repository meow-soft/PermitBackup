package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class RequestService {

    @Value("${permit.username}")
    private String login;
    @Value("${permit.password}")
    private String pass;
    private String Token;
    private String apiUrl = "/api/RemoteBackup";

    public void getToken(Customer customer) {
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Accept", "*/*");
        JSONObject json = new JSONObject();
        json.put("username", login);
        json.put("password", pass);
        String url = customer.getUrl();
        if (url == null || url.isEmpty()) {
            return;
        }
        HttpEntity<String> requestEntity = new HttpEntity<>(json.toString(), headers);
        String authPath = "/mvc/Public/auth/Logon";
        ResponseEntity<String> responseEntity = rest.exchange(url + authPath, HttpMethod.POST, requestEntity, String.class);
        JSONObject jo = new JSONObject(responseEntity.getBody());
        Token = jo.get("AuthToken").toString();
    }

    public void RequestForCreateBackup(Customer customer) {
        if (Token == null) {
            getToken(customer);
        }

        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.add("Accept", "*/*");
        headers.add(HttpHeaders.AUTHORIZATION, "Bearer " + Token);
        HttpEntity<String> requestEntity = new HttpEntity<>(customer.getDbName(), headers);

        ResponseEntity<String> responseEntity = rest.exchange(customer.getUrl() + apiUrl, HttpMethod.POST, requestEntity, String.class);
    }
}
