gradle clean bootJar -Pvaadin.productionMode
docker compose stop
docker compose --env-file .env.local up --build -d