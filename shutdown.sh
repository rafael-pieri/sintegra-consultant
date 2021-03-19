#!/bin/bash

echo "============================="
echo "Stopping application..."
echo "============================="
    docker stop $(docker ps -q --filter ancestor=sintegra-search-engine )
