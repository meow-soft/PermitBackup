package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.repo.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public Customer getCustomer(Long customerId) {
        return customerRepository.findById(customerId).orElse(null);
    }

    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return (List<Customer>) customerRepository.findAll();
    }

    @PostConstruct
    public void init() {
        customerRepository.findAll().forEach(System.out::println);
    }
}
