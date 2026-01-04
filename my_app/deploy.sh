#!/bin/bash
set -e

echo "Starting deployment..."

# We are now inside public_html
REPO_ROOT=$(pwd)

# 1. Sync Laravel app OUTSIDE public_html
rsync -av --delete \
  --exclude='.env' \
  my_app/ \
  ../my_app/

# 2. Install & build inside REAL app
cd ../my_app

composer install --no-dev --optimize-autoloader
npm install
npm run build
php artisan optimize

# 3. Sync public assets BACK to public_html
rsync -av --delete public/build/ "$REPO_ROOT/build/"
rsync -av public/index.php "$REPO_ROOT/index.php"

echo "Deployment finished successfully."
