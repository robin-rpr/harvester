FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

# FIXME: Sudo because of https://github.com/nodejs/docker-node/issues/740
RUN npm run nx build api --configuration=${CONFIGURATION}

WORKDIR /home/node/app/dist/apps/api

CMD [ "node", "main.js" ]

FROM nginx
ARG CONFIGURATION
RUN if [ -z "$CONFIGURATION" ]; then export FILENAME="default.conf"; else export FILENAME="default.${CONFIGURATION}.conf"; fi
COPY --from=builder /nginx/apps/api/$FILENAME /etc/nginx/conf.d/default.conf
