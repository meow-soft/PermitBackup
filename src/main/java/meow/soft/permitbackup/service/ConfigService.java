package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Config;
import meow.soft.permitbackup.repo.ConfigRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConfigService {
    private final ConfigRepository configRepository;
    public Config getByKey(String key) {
        return configRepository.findByKey(key);
    }

    public List<Config> getAllConfigs() {
        return (List<Config>) configRepository.findAll();
    }

    public Optional<Config> findById(Long id) {
        return configRepository.findById(id);
    }

    public void save(Config config) {
        configRepository.save(config);
    }

    public void delete(Config config) {
        configRepository.delete(config);
    }
}
