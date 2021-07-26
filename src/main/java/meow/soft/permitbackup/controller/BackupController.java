package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.repo.CustomerRepository;
import meow.soft.permitbackup.service.MqService;
import meow.soft.permitbackup.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/permitBackup")
@RequiredArgsConstructor
public class BackupController {
    private final RequestService requestService;
    private final CustomerRepository customerRepository;
    @GetMapping
    public String main() {
        Customer customer = customerRepository.getById(1L);
        requestService.RequestForCreateBackup(customer);
        return "test1";
    }
}
