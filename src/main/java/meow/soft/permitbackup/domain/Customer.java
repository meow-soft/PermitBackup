package meow.soft.permitbackup.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Table
@Entity
@Setter
@Getter
@NoArgsConstructor
@SQLDelete(sql = "UPDATE customer SET is_active = true WHERE id=?")
@Where(clause = "is_active=true")
public class Customer implements Serializable, GenericEntity<Customer> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false, unique = true)
    private String dbName;
    @Column(nullable = false)
    private String url;
    @Column(nullable = false)
    private Boolean isActive = false;
    @Column
    private String token;

    private LocalDateTime updated;

    private String filePath;

    @Column(name = "error_message")
    private String errorMessage;

    public Customer(String dbName, String url) {
        this.dbName = dbName;
        this.url = url;
        isActive = true;
    }

    @Override
    public Long getId() {
        return this.id;
    }

    @Override
    public void update(Customer source) {
        this.dbName = source.getDbName();
        this.url = source.getUrl();
        this.isActive = source.isActive;
        //this.token = source.token;
    }

    @Override
    public Customer createNewInstance() {
        Customer newInstance = new Customer();
        newInstance.update(this);
        return newInstance;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "dbName='" + dbName + '\'' +
                ", url='" + url + '\'' +
                '}';
    }
}
