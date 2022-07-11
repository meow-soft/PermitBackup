package meow.soft.permitbackup.controller;

import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.repo.GenericRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/customer")
public class CustomerController extends GenericController<Customer> {


    public CustomerController(GenericRepository<Customer> repository) {
        super(repository);
    }
}
