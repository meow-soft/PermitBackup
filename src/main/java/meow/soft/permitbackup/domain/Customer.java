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
    private long id;
    @Column(nullable = false, unique = true)
    private String dbName;
    @Column(nullable = false)
    private String url;
    @Column(nullable = false)
    private Boolean isActive = false;
    @Column
    private String token;

    public Customer(String dbName, String url) {
        this.dbName = dbName;
        this.url = url;
        isActive = true;
    }
}
