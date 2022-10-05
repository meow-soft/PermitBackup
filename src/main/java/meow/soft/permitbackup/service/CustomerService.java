package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.repo.CustomerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    public Customer getCustomer(Long customerId) {
        return customerRepository.findById(customerId).orElse(null);
    }

    @Transactional
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @PostConstruct
    public void init() {
        List<Customer> all = customerRepository.findAll();
        all.forEach(System.out::println);
    }
}
