package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.Config;
import meow.soft.permitbackup.service.ConfigService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/config")
@RequiredArgsConstructor
public class ConfigController {
    private final ConfigService configService;

    @GetMapping
    public List<Config> showConfig() {
        return configService.getAll();
    }

    @PostMapping
    public List<Config> addConfig(@RequestParam String key,
                                  @RequestParam String value,
                                  @RequestParam(required = false) String description) {
        Config config = new Config(key, value);
        if (description != null && !description.isEmpty()) {
            config.setDescription(description);
        }
        configService.addNew(config);
        return configService.getAll();
    }
}
