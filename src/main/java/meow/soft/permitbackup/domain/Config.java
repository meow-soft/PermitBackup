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
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(nullable = false)
    private String Key;
    @Column(nullable = false)
    private String Value;
    private String Description;

    public Config(String key, String value) {
        this.Key = key;
        this.Value = value;
    }
}
