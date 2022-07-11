CREATE TABLE config
(
    id           BIGINT AUTO_INCREMENT NOT NULL,
    config_key   VARCHAR(255),
    config_value VARCHAR(255),
    description  VARCHAR(255),
    CONSTRAINT pk_config PRIMARY KEY (id)
);

CREATE TABLE customer
(
    id        BIGINT       NOT NULL,
    db_name   VARCHAR(255) NOT NULL,
    url       VARCHAR(255) NOT NULL,
    is_active BOOLEAN      NOT NULL,
    token     VARCHAR(255),
    CONSTRAINT pk_customer PRIMARY KEY (id)
);

ALTER TABLE customer
    ADD CONSTRAINT uc_customer_dbname UNIQUE (db_name);