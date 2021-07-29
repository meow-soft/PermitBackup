package meow.soft.permitbackup.repo;

import meow.soft.permitbackup.domain.Config;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "config", path = "config")
public interface ConfigRepository extends PagingAndSortingRepository<Config, Long> {
    Config findByKey(String key);

}
