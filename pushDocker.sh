#!/bin/bash

GIT_HASH= git rev-parse --short HEAD
echo "$GIT_HASH"
gradle clean bootJar -Pvaadin.productionMode
#docker build --tag wonderkot/backuper:$GIT_HASH .
#docker push wonderkot/backuper:$GIT_HASH

docker build --tag wonderkot/backuper:latest .
docker push wonderkot/backuper:latest
echo "pushed"





