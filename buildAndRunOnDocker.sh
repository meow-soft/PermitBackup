gradle clean bootJar -Pvaadin.productionMode
docker compose --env-file .env.local stop
docker compose --env-file .env.local up --build -d