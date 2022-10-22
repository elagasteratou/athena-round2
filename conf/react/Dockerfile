FROM node:10-alpine
MAINTAINER Robert Wells <rwells@dvele.com>


WORKDIR /tmp
COPY front/package.json /tmp/

ENV NODE_ENV=development
RUN npm config set unsafe-perm true


ENV NODE_PATH=/node_modules

WORKDIR /app

# So docker is not being run as a root user
RUN chown -R node:node /app

COPY /front/package.json /app/
COPY /front/.eslintrc.json /app/

COPY /conf/react/webpack.dev.js /app/
COPY /conf/react/webpack.common.js /app/