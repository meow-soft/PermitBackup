package meow.soft.permitbackup.view;

import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.data.renderer.ComponentRenderer;
import com.vaadin.flow.data.renderer.LocalDateTimeRenderer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import meow.soft.permitbackup.domain.Customer;
import meow.soft.permitbackup.service.CustomerService;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

@Route("")
public class MainView extends HorizontalLayout {
    private final CustomerService customerService;

    public MainView(CustomerService customerService) {
        this.customerService = customerService;
        buildGrid();
    }

    private void buildGrid() {
        Grid<Customer> grid = new Grid<>();
        grid.setItems(customerService.getAllCustomers());

        grid.addColumn(Customer::getDbName).setHeader("Customer");
        grid.addColumn(Customer::getUrl).setHeader("Url");

        grid.addColumn(new LocalDateTimeRenderer<>(
                Customer::getUpdated,
                "dd.MM.yyyy HH:mm:ss")
        ).setHeader("Update At");
        grid.addColumn(Customer::getErrorMessage).setHeader("Last Error");

//        grid.addColumn(new ComponentRenderer<>(customer -> {
//            Button button = new Button(new Icon(VaadinIcon.DOWNLOAD), event -> {
//
//            });
//
//            if (customer.getFilePath() == null || customer.getFilePath().isEmpty())
//                button.setEnabled(false);
//            return button;
//        }));
        grid.addColumn(new ComponentRenderer<>(customer -> {
            if (customer.getFilePath() == null || customer.getFilePath().isEmpty())
                return new Text("No File");

            File file = new File(customer.getFilePath());
            StreamResource streamResource = new StreamResource(file.getName(), () -> getStream(file));

            Anchor link = new Anchor(streamResource, String.format("%s (%d MB)", file.getName(),
                    (int) file.length() / 1024 / 1024));
            link.getElement().setAttribute("download", true);
            return link;
        }));

        grid.setAllRowsVisible(true);

        add(grid);

    }

    private InputStream getStream(File file) {
        FileInputStream stream = null;
        try {
            stream = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            //
        }

        return stream;
    }
}
