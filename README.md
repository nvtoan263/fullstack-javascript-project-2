# Storefront backend
This repo contains the backend application for an eCommerce store front. It is a RESTful API.

The database schema and and API route information can be found in the [requirements doc](REQUIREMENTS.md).
## Technology and Libraries
The application uses the following libraries: 
* Runtime: Node.js (JavaScript)
* Web application framework: Express
* Language: TypeScript 
* Database: Postgres
* Testing: Jasmine and Supertest
* Docker

## Installation Instructions
To install the app's dependencies and use the app in dev mode, run the following: 

`yarn or npm install` 

### Development roadmap
create env file
create database file
install dotenv: yarn add dotenv
install db migrate: npm install -g db-migrate
install package to project: yarn add db-migrate db-migrate-pg
create database json with dev environment for db-migrate
creare sql file  by commands: db-migrate create order-product-table --sql-file
set up database:
- docker-compose -p <<target-env>> up
- "db-migrate up" to start migration or "db-migrate down" to discard migration
- #db-migrate --env dev up" to start migration target environment
- install jasmine and supertest for unittest
  npx jasmine init

### Ports
The application runs on port `3000` 
Database dev mode will be using port `5432`.
Database dev mode will be using port `5433`.

### Environment variables 
Below are variable are need for project
replace ##### by prefer password for token and database
```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=dev_storefront
POSTGRES_USER=dev_user
POSTGRES_PASSWORD=#####
POSTGRES_TEST_DB=test_storefront

POSTGRES_PORT=5432
POSTGRES_TEST_PORT=5433

ENV=dev
TOKEN_KEY=#####
BCRYPT_PASSWORD=#####
SALT_ROUNDS="10"

```

## Start Application
Step 1. Run docker at other terminal by command `docker-compose -p progress up`

Step 2. Build application `yarn build-app` or `npm run build-app`

Step 3. Run application `yarn start` or `npm run start`

Step 4. Test route api from postman

## run unit test 
Step 1. Run docker at other terminal by command `docker-compose -p progress-test up`

Step 2. Build everything including code test `yarn build-all` or `yarn run build-all`

Step 3. Run test `yarn test` or `npm run test`
