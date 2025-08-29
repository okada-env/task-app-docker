FROM php:8.2-fpm-alpine

# install library
RUN apk update && \
    apk add --no-cache --virtual .php-builds oniguruma-dev git zip unzip mysql-client

# add php-ext-module
RUN docker-php-ext-install mbstring pdo_mysql && \
    docker-php-ext-enable mbstring pdo_mysql

# install composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

WORKDIR /src