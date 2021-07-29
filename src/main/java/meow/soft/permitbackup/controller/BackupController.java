package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.repo.CustomerRepository;
import meow.soft.permitbackup.service.CustomerService;
import meow.soft.permitbackup.service.MqService;
import meow.soft.permitbackup.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
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
        for(Customer customer : customers) {
            requestService.RequestForCreateBackup(customer);
        }
        return "test1";
    }
    @GetMapping("/getFile")
    public String getFile() {
        Customer customer = customerService.getCustomer(1L);
        requestService.getFile("QzpcTVNcUGVybWl0XFRlbXBcTGFNZXNhXExhTWVzYS43eg==", customer);
        return "test1";
    }
}
