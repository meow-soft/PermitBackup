package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.service.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
@RequiredArgsConstructor
public class CustomerConfig {
    private final CustomerService customerService;

    @GetMapping
    public List<Customer> showCustomers() {
        return customerService.getAll();
    }

    @PostMapping
    public List<Customer> addCustomer(@RequestParam String name, @RequestParam String url) {
        Customer customer = new Customer(name, url);
        customerService.addNew(customer);
        return customerService.getAll();
    }
}
