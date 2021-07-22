package meow.soft.permitbackup.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/permitBackup")
public class BackupController {

    @GetMapping
    public String main() {
        return "test1";
    }
}
