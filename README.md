# Portfolio

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Build docker image
```
docker build . -t portfolio
```

### Run docker image
```
docker run -d -p 8080:80 portfolio
```

### Configure Digital Ocean Droplet
```
ssh root@yip
mkdir ~/.ssh
chmod 700 ~/.ssh
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa
docker login registry.gitlab.com
```
Add private key and ip to gitlab variables as DEPLOY_SERVER_PRIVATE_KEY and DEPLOYMENT_SERVER_IP respectively

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
