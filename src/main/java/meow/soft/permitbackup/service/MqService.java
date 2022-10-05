package meow.soft.permitbackup.service;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import meow.soft.permitbackup.domain.BackupServiceResponse;
import meow.soft.permitbackup.domain.Customer;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
@RequiredArgsConstructor
@Slf4j
public class MqService {
    public static final String TEST_MSG = "test";
    private final RequestService requestService;
    private final CustomerService customerService;
    private final RabbitTemplate rabbitTemplate;

    public void receiveMessage(String message) {
        if (message.equals(TEST_MSG)) {
            log.info("--- test message received ---");
            return;
        }
        log.info(">>> receiveMessage");
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
        try {
            BackupServiceResponse backupServiceResponse = objectMapper.readValue(message, BackupServiceResponse.class);
            log.info(String.format("Response received: %s", backupServiceResponse));
            if (backupServiceResponse != null) {
                Customer customer = customerService.getCustomer(backupServiceResponse.getCustomerId());
                if (backupServiceResponse.getResult() == 0) {
                    if (customer != null) {
                        requestService.getFile(backupServiceResponse.getFile(), customer);
                    } else throw new Exception("Customer not found!");
                } else {
                    customer.setErrorMessage(backupServiceResponse.getMessage());
                    customerService.save(customer);
                }
            }
        } catch (Exception e) {
            log.error("Error on receive message", e);
        }
        log.info("<<< receiveMessage");
    }

    @PostConstruct
    public void testMqOnInit() {
        checkMq(TEST_MSG);
    }


    public void checkMq(String msg) {
        if (msg == null)
            msg = TEST_MSG;
        log.info(">>> send test message");
        try {
            rabbitTemplate.convertAndSend("exchange", "foo.bar", msg);
        } catch (Exception e) {
            log.error("error on send test message", e);
        }
    }


}
