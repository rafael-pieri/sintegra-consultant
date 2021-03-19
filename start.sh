#!/bin/bash

echo "============================="
echo "Generating docker image..."
echo "============================="
    docker build -t sintegra-search-engine .

echo "============================"
echo "Starting application..."
echo "============================"
    docker run -d -p3000:3000 sintegra-search-engine
