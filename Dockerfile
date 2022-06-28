FROM openjdk:11

COPY ./build/libs/PermitBackupService-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "-Djasypt.encryptor.password=kaidolon", "/app.jar"]

