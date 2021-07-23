package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Config;
import meow.soft.permitbackup.repo.ConfigRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConfigService {
    private final ConfigRepository configRepository;

    public List<Config> getAll() {
        return configRepository.findAll();
    }

    public void addNew(Config config) {
        configRepository.save(config);
    }
}
