package meow.soft.permitbackup.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StorageStats {
    private final long TotalSpace;

    private final long UsedSpace;

    private final long FreeSpace;

    public StorageStats(long totalSpace, long usedSpace, long freeSpace) {
        this.TotalSpace = totalSpace;
        this.UsedSpace = usedSpace;
        this.FreeSpace = freeSpace;
    }
}
