package meow.soft.permitbackup.service;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import meow.soft.permitbackup.domain.BackupServiceResponse;
import meow.soft.permitbackup.domain.Customer;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class MqService {
    private final RequestService requestService;
    private final CustomerService customerService;

    public void receiveMessage(String message) {
        log.info(">>> receiveMessage");
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
        try {
            BackupServiceResponse backupServiceResponse = objectMapper.readValue(message, BackupServiceResponse.class);
            log.info(String.format("Response received: %s", backupServiceResponse));
            if (backupServiceResponse != null) {
                if (backupServiceResponse.getResult() == 0){
                    Customer customer = customerService.getCustomer(backupServiceResponse.getCustomerId());
                    if (customer != null)
                    {
                        requestService.getFile(backupServiceResponse.getFile(), customer);
                    }
                    else throw new Exception("Customer not found!");
                }
            }
        } catch (Exception e) {
            log.error("Error on receive message", e);
        }
        log.info("<<< receiveMessage");
    }
}
