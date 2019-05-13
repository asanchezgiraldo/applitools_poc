#!/bin/bash

set -o pipefail
set -e

export APPLITOOLS_CONCURRENCY=1000

# Run our tests.
./node_modules/.bin/cypress run --record --key 852817db-b91e-45df-acdd-5da969497cef
