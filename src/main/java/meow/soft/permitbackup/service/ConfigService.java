package meow.soft.permitbackup.service;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Config;
import meow.soft.permitbackup.repo.ConfigRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConfigService {
    private final ConfigRepository configRepository;
    public Config getByKey(String key) {
        return configRepository.findByKey(key);
    }
}
