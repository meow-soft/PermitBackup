package meow.soft.permitbackup.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Table
@Entity
@Setter
@Getter
@NoArgsConstructor
public class HistoryEntry {
    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(nullable = false)

    private String Text;
    @Column(nullable = false)

    private Long Timestamp;

    public HistoryEntry(String text, Long timestamp) {
        this.Text = text;
        this.Timestamp = timestamp;
    }
}