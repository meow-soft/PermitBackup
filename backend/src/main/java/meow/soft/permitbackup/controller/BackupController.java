package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.service.CustomerService;
import meow.soft.permitbackup.service.RequestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/permitBackup")
@RequiredArgsConstructor
public class BackupController {
    private final RequestService requestService;
    private final CustomerService customerService;

    @GetMapping
    public String main() {
        List<Customer> customers = customerService.getAllCustomers();
        if (customers != null) {
            for (Customer customer : customers) {
                if (customer.getIsActive()) {
                    requestService.RequestForCreateBackup(customer);
                }
            }
        }
        return "test1";
    }
}
