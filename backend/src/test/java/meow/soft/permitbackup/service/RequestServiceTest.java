package meow.soft.permitbackup.service;

import meow.soft.permitbackup.domain.Config;
import meow.soft.permitbackup.domain.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.mockito.Mockito.*;

@SpringBootTest
@ActiveProfiles("test")
class RequestServiceTest {
    @Mock
    CustomerService customerService;
    @Mock
    ConfigService configService;
    @Mock
    Logger log;
    @InjectMocks
    RequestService requestService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetToken() {
        requestService.getToken(new Customer("AlamedaTidemark", "https://acpermit.acgov.org/Permit/"));
    }

    @Test
    void testRequestForCreateBackup() {
        requestService.RequestForCreateBackup(new Customer("dbName", "url"));
    }

    @Test
    void testGetFile() {
        when(configService.getByKey(anyString())).thenReturn(new Config());

        requestService.getFile("filenameB64", new Customer("dbName", "url"));
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme