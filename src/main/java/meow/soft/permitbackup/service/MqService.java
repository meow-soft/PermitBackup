package meow.soft.permitbackup.service;

import org.springframework.stereotype.Service;

@Service
public class MqService {

    public void receiveMessage(String message) {
        System.out.println("Received <" + message + ">");
    }
}
