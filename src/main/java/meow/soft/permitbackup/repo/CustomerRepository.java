package meow.soft.permitbackup.repo;

import meow.soft.permitbackup.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
