FROM openjdk:11

COPY ./build/libs/app.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "-Djasypt.encryptor.password=kaidolon", "/app.jar"]

