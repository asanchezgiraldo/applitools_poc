# applitools_poc

### Run Cypress ###

```
export APPLITOOLS_API_KEY=<applitools-key>
```

Run our tests.

```
./node_modules/.bin/cypress run --browser chrome --record --key ,<cypress-key>
```

### Run TestCafe ###

```
npm install testcafe -g
npm install testcafe-browser-provider-selenium -g
```

selenium:browserName[@version][:platform]
for example:

```
selenium:chrome
selenium:chrome@52.0
selenium:chrome@52.0:linux
```

```
cd docker
docker-compose up
testcafe -c 2 selenium:chrome@73.0.3683.86 testcafe/*.js --skip-js-errors
testcafe -c 2 selenium:chrome@72.0.3626.121 testcafe/*.js --skip-js-errors
testcafe -c 2 selenium:chrome@71.0.3578.98 testcafe/*.js --skip-js-errors
```

```
# Run on local browser
testcafe -c 2 safari testcafe/*.js --skip-js-errors
testcafe -c 2 chrome testcafe/*.js --skip-js-errors
testcafe -c 2 firefox testcafe/*.js --skip-js-errors
```

```
# Run on remote
testcafe remote testcafe/*.js --skip-js-errors --ports 12345,9999
```