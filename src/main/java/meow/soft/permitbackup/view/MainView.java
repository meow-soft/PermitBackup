package meow.soft.permitbackup.view;

import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.service.CustomerService;

@Route("")
public class MainView extends VerticalLayout {
    private final CustomerService customerService;
    private final Grid<Customer> grid;

    public MainView(CustomerService customerService) {
        this.customerService = customerService;
        this.grid = new Grid<>(Customer.class);
        add(grid);
        grid.setItems(customerService.getAllCustomers());
    }
}
