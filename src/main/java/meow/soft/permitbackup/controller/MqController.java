package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.service.MqService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mq")
@RequiredArgsConstructor
public class MqController {

    private final MqService mqService;

    @PostMapping
    public void testMq(String msg) {
        mqService.checkMq(msg);
    }
}
