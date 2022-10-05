package meow.soft.permitbackup.view;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.grid.editor.Editor;
import com.vaadin.flow.component.html.Anchor;
import com.vaadin.flow.component.icon.VaadinIcon;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
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
        Editor<Customer> editor = grid.getEditor();
        editor.addSaveListener(e -> {
            customerService.save(e.getItem());
        });

        grid.setItems(customerService.getAllCustomers());

        Grid.Column<Customer> customerColumn = grid.addColumn(Customer::getDbName).setHeader("Customer");
        Grid.Column<Customer> urlColumn = grid.addColumn(Customer::getUrl).setHeader("Url");

        grid.addColumn(new LocalDateTimeRenderer<>(
                Customer::getUpdated,
                "dd.MM.yyyy HH:mm:ss")
        ).setHeader("Update At");
        grid.addColumn(Customer::getErrorMessage).setHeader("Last Error");

        grid.addColumn(new ComponentRenderer<>(this::getDownloadFileLink));

        Grid.Column<Customer> editColumn = grid.addComponentColumn(customer -> {
            Button editButton = new Button("Edit");
            editButton.addClickListener(e -> {
                if (editor.isOpen())
                    editor.cancel();
                grid.getEditor().editItem(customer);
            });
            return editButton;
        }).setWidth("150px").setFlexGrow(0);

        editor.setBinder(getBinder(customerColumn, urlColumn));
        editor.setBuffered(true);

        editColumn.setEditorComponent(getActionsLayout(editor));


        grid.setAllRowsVisible(true);

        add(grid);

    }

    private Component getDownloadFileLink(Customer customer) {
        if (customer.getFilePath() == null || customer.getFilePath().isEmpty())
            return new Text("No File");

        File file = new File(customer.getFilePath());
        if (!file.exists())
            return new Text("No File");
        StreamResource streamResource = new StreamResource(file.getName(), () -> getStream(file));

        Anchor link = new Anchor(streamResource, String.format("%s (%d MB)", file.getName(),
                (int) file.length() / 1024 / 1024));
        link.getElement().setAttribute("download", true);
        return link;
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

    private Binder<Customer> getBinder(Grid.Column<Customer> customerColumn, Grid.Column<Customer> urlColumn) {
        Binder<Customer> binder = new Binder<>(Customer.class);

        TextField firstNameField = new TextField();
        firstNameField.setWidthFull();
        binder.forField(firstNameField)
                .asRequired("Customer must not be empty")
                .bind(Customer::getDbName, Customer::setDbName);
        customerColumn.setEditorComponent(firstNameField);

        TextField lastNameField = new TextField();
        lastNameField.setWidthFull();
        binder.forField(lastNameField).asRequired("URL must not be empty")
                .bind(Customer::getUrl, Customer::setUrl);
        urlColumn.setEditorComponent(lastNameField);

        return binder;
    }

    private HorizontalLayout getActionsLayout(Editor<Customer> editor) {
        Button saveButton = new Button("Save", e -> editor.save());
        Button cancelButton = new Button(VaadinIcon.CLOSE.create(),
                e -> editor.cancel());
        cancelButton.addThemeVariants(ButtonVariant.LUMO_ICON,
                ButtonVariant.LUMO_ERROR);
        HorizontalLayout actions = new HorizontalLayout(saveButton,
                cancelButton);
        actions.setPadding(false);

        return actions;
    }
}
