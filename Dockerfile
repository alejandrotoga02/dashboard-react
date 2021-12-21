FROM registry.access.redhat.com/ubi8/nodejs-14 AS builder
LABEL maintainer="Elias Alejandro"
WORKDIR /app
COPY . /app
USER root

RUN npm install -g yarn
RUN chmod -R ug+rwx /app && yarn install && yarn build

#------------------------------------------------------------
FROM registry.access.redhat.com/ubi8/nginx-118
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Copy static assets from builder stage
COPY --from=builder /app/build .
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx","-g","daemon off;"]
