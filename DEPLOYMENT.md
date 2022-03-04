# PRODUCTION

    docker build -t tablerosprod.azurecr.io/frontend:latest . && docker push tablerosprod.azurecr.io/frontend:latest
# QA

    docker build -t tableros.azurecr.io/frontend:latest . && docker push tableros.azurecr.io/frontend:latest
