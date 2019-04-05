# applitools_poc

### Run Cypress ###

export APPLITOOLS_API_KEY=<applitools-key>
# Run our tests.
./node_modules/.bin/cypress run --browser chrome --record --key ,<cypress-key>


### Run TestCafe ###

cd docker
docker-compose up
testcafe -c 2 selenium:chrome testcafe/*.js --skip-js-errors