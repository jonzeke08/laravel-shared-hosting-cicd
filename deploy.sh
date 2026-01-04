#!/bin/bash

set -e

echo "Starting deployment..."

# Go to app directory
cd my_app

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Build frontend
npm install
npm run build

# Optimize Laravel
php artisan optimize

# Go back to public_html
cd ..

# Sync public assets
rsync -av --delete my_app/public/build/ public_html/build/
rsync -av my_app/public/index.php public_html/index.php

echo "Deployment finished."
