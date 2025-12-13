#!/bin/bash

# Fix permissions for João Pedro Salles Portfolio project
# Run with: chmod +x scripts/fix-permissions.sh && ./scripts/fix-permissions.sh

echo "🔧 Fixing permissions for João Pedro Salles Portfolio..."

# Fix npm permissions
echo "📦 Fixing npm permissions..."
sudo chown -R $(whoami) ~/.npm 2>/dev/null || echo "⚠️  Could not fix ~/.npm permissions"
sudo chown -R $(whoami) ~/.nvm 2>/dev/null || echo "⚠️  Could not fix ~/.nvm permissions"

# Fix node_modules permissions
echo "📁 Fixing node_modules permissions..."
sudo chown -R $(whoami) node_modules 2>/dev/null || echo "⚠️  Could not fix node_modules permissions"

# Fix yarn cache permissions
echo "🧶 Fixing yarn cache permissions..."
sudo chown -R $(whoami) ~/.yarn 2>/dev/null || echo "⚠️  Could not fix ~/.yarn permissions"

# Clean and reinstall
echo "🧹 Cleaning and reinstalling dependencies..."
rm -rf node_modules package-lock.json yarn.lock .yarn
npm install

echo "✅ Permissions fixed! Try running: npm run lint"
