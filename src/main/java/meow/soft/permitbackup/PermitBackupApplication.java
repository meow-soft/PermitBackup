package meow.soft.permitbackup;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import meow.soft.permitbackup.service.MqService;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PermitBackupApplication {
    static final String topicExchangeName = "exchange";

    static final String queueName = "Permit1";

    @Bean
    RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean
    Queue queue() {
        return new Queue(queueName, true);
    }

    @Bean
    TopicExchange exchange() {
        return new TopicExchange(topicExchangeName);
    }

    @Bean
    Binding binding(Queue queue, TopicExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with("foo.bar");
    }

    @Bean
    SimpleMessageListenerContainer container(ConnectionFactory connectionFactory, MessageListenerAdapter listenerAdapter) {
        SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
        container.setConnectionFactory(connectionFactory);
        container.setQueueNames(queueName);
        container.setMessageListener(listenerAdapter);
        return container;
    }

    @Bean
    MessageListenerAdapter listenerAdapter(MqService receiver) {
        return new MessageListenerAdapter(receiver, "receiveMessage");
    }

    @Bean
    ConnectionFactory connectionFactory() {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory("elk.rmq2.cloudamqp.com");
        connectionFactory.setUsername("bztgnhov");
        connectionFactory.setPassword("CfB-TLQ4ZGmpsQabQVs8-VcYLy9-DpW5");
        connectionFactory.setVirtualHost("bztgnhov");
        connectionFactory.setRequestedHeartBeat(30);
        connectionFactory.setConnectionTimeout(30000);
        return connectionFactory;
    }

    public static void main(String[] args) {
        SpringApplication.run(PermitBackupApplication.class, args);
    }

}
