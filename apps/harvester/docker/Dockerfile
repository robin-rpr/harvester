FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

RUN npm run nx build harvester --configuration=${CONFIGURATION}

FROM nginx
ARG NGINX_CONFIG
COPY --from=builder home/node/app/nginx/apps/api/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf
COPY --from=builder home/node/app/dist/apps/harvester/* /usr/share/nginx/html