package meow.soft.permitbackup.service;

import meow.soft.permitbackup.domain.Customer;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class CustomerServiceTest {
    @Autowired
    CustomerService customerService;

    @Test
    void getCustomer() {
        Customer customer = customerService.getCustomer(1L);
        Assertions.assertNotNull(customer);
    }

    @Test
    void save() {
        Customer customer = new Customer();
        customer.setDbName("Test");
        customer.setUrl("test url");

        customerService.save(customer);
    }

    @Test
    void getAllCustomers() {
        List<Customer> customers = customerService.getAllCustomers();
        Assertions.assertNotNull(customers);
    }
}