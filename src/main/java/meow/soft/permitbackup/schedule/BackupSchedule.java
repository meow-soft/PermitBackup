package meow.soft.permitbackup.schedule;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.service.CustomerService;
import meow.soft.permitbackup.service.RequestService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class BackupSchedule {

    private final CustomerService customerService;
    private final RequestService requestService;

    @Scheduled(cron = "0 0 5 ? * * *")
    public void RunBackup() {
        log.info(">>> Run Backup by schedule");
        List<Customer> customers = customerService.getAllCustomers();
        if (customers != null) {
            for (Customer customer : customers) {
                if (customer != null && customer.getIsActive()) {
                    requestService.RequestForCreateBackup(customer);
                }
            }
        }
        log.info("Task completed!");
        log.info("<<< Run Backup by schedule");
    }
}
