package meow.soft.permitbackup.repo;

import meow.soft.permitbackup.domain.Config;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfigRepository extends JpaRepository<Config, Long> {

}
