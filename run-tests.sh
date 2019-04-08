#!/bin/bash

set -o pipefail
set -e
export APPLITOOLS_API_KEY=

# Start Grid
#cd docker
#docker-compose up
#cd ..


# Run our tests.
./node_modules/.bin/cypress run --browser chrome --record --key 


# Stop Grid
#cd docker
#cd docker-compose stop
