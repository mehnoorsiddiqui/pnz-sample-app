#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define directories
API_DIR="account-and-transaction-api-specification-ts_generic_lib"
AUTH_DIR="Account+Information+API"
SERVER_DIR="server"
CLIENT_DIR="client"

# Install dependencies for Account Information API
echo "Installing dependencies for Account Information API..."
cd $API_DIR
npm install

# Install dependencies for Account Information Authentication
echo "Installing dependencies for Account Information Authentication..."
cd ../$AUTH_DIR
npm install

# Install dependencies for the server
echo "Installing dependencies for the server..."
cd ../$SERVER_DIR
npm install

# Install dependencies for the client
echo "Installing dependencies for the client..."
cd ../$CLIENT_DIR
npm install

echo "All dependencies have been successfully installed."
