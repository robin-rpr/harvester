FROM node:latest as builder

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
RUN npm run build --configuration=${CONFIGURATION}
COPY --chown=node:node . .

WORKDIR dict/apps/harvester

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --R /* /usr/share/nginx/html