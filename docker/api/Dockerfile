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

# Copy composer files first for better layer caching
COPY composer.json composer.lock ./

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Copy the rest of the application code
COPY . .

# Set proper permissions
RUN chown -R www-data:www-data /src && \
    chmod -R 755 /src