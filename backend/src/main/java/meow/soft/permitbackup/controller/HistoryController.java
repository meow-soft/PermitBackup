package meow.soft.permitbackup.controller;

import lombok.RequiredArgsConstructor;
import meow.soft.permitbackup.domain.HistoryEntry;
import meow.soft.permitbackup.service.HistoryService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/history")
@RequiredArgsConstructor
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping
    public List<HistoryEntry> getHistory() {
        List<HistoryEntry> entries = new ArrayList<>();
        entries.add(new HistoryEntry("Alameda backup downloaded.", System.currentTimeMillis() / 1000L));
        entries.add(new HistoryEntry("Tinley park backup started.", System.currentTimeMillis() / 1000L));
        entries.add(new HistoryEntry("Backups cleaned up.", System.currentTimeMillis() / 1000L));
        entries.add(new HistoryEntry("Wyoming's backup process has failed.", System.currentTimeMillis() / 1000L));
        return entries;
    }
}