package meow.soft.permitbackup.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import meow.soft.permitbackup.repo.CustomerRepository;

import javax.persistence.*;
import java.io.Serializable;

@Table
@Entity
@Setter
@Getter
@NoArgsConstructor
public class Customer  implements Serializable, GenericEntity<Customer>{
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

    @Override
    public Long getId(){
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
}
