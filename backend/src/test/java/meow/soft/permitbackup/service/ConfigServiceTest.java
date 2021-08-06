package meow.soft.permitbackup.service;

import meow.soft.permitbackup.domain.Config;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
class ConfigServiceTest {

    @Autowired
    ConfigService configService;

    @BeforeEach
    void setUp() {
    }

    @Test
    void getByKey() {
        Config config = configService.getByKey("saveFolder");
        Assert.notNull(config, config.toString());
    }
}