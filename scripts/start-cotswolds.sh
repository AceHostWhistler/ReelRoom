#!/bin/bash

# Script to start the Cotswolds website with consistent configuration
# This ensures it always runs on the same port and with the correct environment

# Check if any Node processes are running on port 3001
if lsof -ti:3001 > /dev/null; then
  echo "Port 3001 is already in use. Stopping the process..."
  lsof -ti:3001 | xargs kill -9
  sleep 1
fi

# Set environment variables
export NEXT_PUBLIC_SITE_NAME="AceHost Cotswolds"
export NEXT_PUBLIC_SITE_URL="https://acehost.ca"
export NEXT_PUBLIC_CURRENT_WEBSITE="cotswolds"
export PORT=3001

# Start the development server
echo "Starting Cotswolds website on port 3001..."
npm run dev -- -p 3001

# The script will hang here while the dev server runs
# Press Ctrl+C to stop the server 