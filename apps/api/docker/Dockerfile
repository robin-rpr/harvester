FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

RUN npm run nx build api -- --configuration=${CONFIGURATION}

WORKDIR /home/node/app/dist/apps/api

CMD [ "node", "main.js" ]

FROM nginx
ARG NGINX_CONFIG
COPY --from=builder home/node/app/nginx/apps/api/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf
