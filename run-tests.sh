#!/bin/bash

set -o pipefail
set -e
export APPLITOOLS_API_KEY=0FO1003dCbmTRlpFaLrH8riHYVr107kW0rtpz09wF6PCVuE110

# Start Grid
#cd docker
#docker-compose up
#cd ..


# Run our tests.
./node_modules/.bin/cypress run --browser chrome --record --key 852817db-b91e-45df-acdd-5da969497cef


# Stop Grid
#cd docker
#cd docker-compose stop