# Monorepo boilerplate

## Project management packages

- Global

  - [Yarn](https://yarnpkg.com/en/) - dependency manager

- Local

  - [Lerna](https://github.com/lerna/lerna) - monorepo management tool

  > we use Lerna because Yarn does not yet support workspaces very well

## Usage

1. Install global packages
```sh
npm i -g yarn
```

2. Install dependencies
```sh
npm run bootstrap
```

3. Start script
```sh
cd packages/client
yarn run start
```

## Certificate

### Self-signed SSL certificate

```ssh
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
openssl rsa -passin pass:x -in server.pass.key -out server.key
```

Writing RSA key:

```ssh
rm server.pass.key
openssl req -new -key server.key -out server.csr
```

Generate certificate:

```ssh
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```