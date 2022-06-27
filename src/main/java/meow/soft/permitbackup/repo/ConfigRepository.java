package meow.soft.permitbackup.repo;

import meow.soft.permitbackup.domain.Config;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface ConfigRepository extends PagingAndSortingRepository<Config, Long> {
    Config findByKey(String key);

}


