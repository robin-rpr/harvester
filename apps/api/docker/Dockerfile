FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

#RUN npm run nx build api -- --configuration=${CONFIGURATION} // Not supported yet
RUN npm run nx build api

WORKDIR /home/node/app/dist/apps/api

FROM smebberson/alpine-nginx-nodejs
ARG NGINX_CONFIG

COPY --from=builder home/node/app/nginx/apps/api/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf
COPY --from=builder home/node/app/dist/apps/api/* /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html

CMD [ "node", "main.js" ]
