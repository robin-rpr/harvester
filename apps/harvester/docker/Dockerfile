FROM node:latest as builder
WORKDIR /usr/src/app
USER node

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

# FIXME: Sudo because of https://github.com/nodejs/docker-node/issues/740
RUN sudo npm run nx build harvester --configuration=${CONFIGURATION}

FROM nginx
COPY ./nginx/apps/harvester/default.${CONFIGURATION}.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /dist/apps/harvester/* /usr/share/nginx/html