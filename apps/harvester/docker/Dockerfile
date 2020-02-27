FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

# FIXME: Sudo because of https://github.com/nodejs/docker-node/issues/740
RUN sudo npm run nx build harvester --configuration=${CONFIGURATION}

FROM nginx
ARG CONFIGURATION
RUN if [ -z "$CONFIGURATION" ]; then export CONFIGURATION="default.conf"; else export CONFIGURATION="default.${CONFIGURATION}.conf"; fi
COPY --from=builder /nginx/apps/harvester/${CONFIGURATION} /etc/nginx/conf.d/default.conf
COPY --from=builder /dist/apps/harvester/* /usr/share/nginx/html