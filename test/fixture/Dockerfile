ARG NODE_VERSION=8.9.4
FROM node:$NODE_VERSION-alpine
#FROM mhart/alpine-node:$NODE_VERSION

workdir /app

arg DOCKER_BUILD_PROXY

# Do the packages first
#copy package.json yarn.lock /app/
#run set -uex; \
#    yarn --no-cache install; \
#    find /tmp;
copy package.json /app/
run set -uex; \
    npm install; \
    rm -rf ~/.npm;

# Then the app
add . /app

# Runtime
USER nobody
#CMD ["yarn", "run", "test"]
CMD ["npm", "run", "test"]

