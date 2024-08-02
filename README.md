# Health

Just a health container for routing and testing purposes.

## Usage

### Via Docker

```bash
docker run -d -p 3000:3000 rot26/status
```

### Via Source

```bash
cd packages/status
npm install
npm start
```

### Vist Localhost

[http://localhost:3000](http://localhost:3000)


### Sample Logs

```logs
 npm start

> status@0.1.0 start
> node src/index.js

init
Server listening on http://0.0.0.0:3001
HTTP 1.1 GET / 127.0.0.1:58108
HTTP 1.1 GET /favicon.ico 127.0.0.1:58108
```

## DockerHub

[rot26/status](https://hub.docker.com/r/rot26/status)

## Docker Pull Command

```bash
docker pull rot26/status
```

## Source

[GitHub](https://github.com/rot26/status)
