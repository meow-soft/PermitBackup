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
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(nullable = false)
    private String DbName;
    @Column(nullable = false)
    private String Url;
    @Column(nullable = false)
    private Boolean IsActive = false;

    public Customer(String dbName, String url) {
        DbName = dbName;
        Url = url;
        IsActive = true;
    }
}
