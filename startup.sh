#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
echo "Installing project dependencies..."
npm install

# Build the Next.js application (optional, as `npm run dev` handles development build)
# echo "Building the project..."
# npm run build

# Run the Next.js development server on port 9000
echo "Starting the development server on port 9000..."
npm run dev