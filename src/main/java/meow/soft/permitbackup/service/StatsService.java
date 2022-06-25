package meow.soft.permitbackup.service;

import meow.soft.permitbackup.dto.StorageStats;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class StatsService {
    public StorageStats get() {
        File file = new File("/");
        long total = file.getTotalSpace();
        long free = file.getFreeSpace();
        long used = total - free;
        return new StorageStats(total, free, used);
    }
}
