# Serverless Typescript + Mongodb implementation

### Installing

install dependencies

```
yarn install
```

start a local mongodb instance

```
sudo service mongod start
```

```
mongod
```

```
use CONDUIT_APP
```

```
export db='mongodb://127.0.0.1:27017/CONDUIT_APP
```

run serverless offline:

```
yarn start
```

## Running the tests

A few tests will fail for some reasons. PRs are welcome.

```
yarn test
```

## Deployment

Create a env file called env.yml with the following content for deployment.

```
prod:
  db: <your-db-connection-string>
```

And run deployment command.

```
yarn deploy
```
