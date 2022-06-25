package meow.soft.permitbackup.domain;

import lombok.Data;

@Data
public class BackupServiceResponse {
    private int result;
    private String file;
    private String message;
    private Long customerId;
}
