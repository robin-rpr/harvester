FROM node:latest as builder
WORKDIR /app
COPY package*.json ./
USER node
RUN npm install
RUN nx build api --configuration=${CONFIGURATION}
COPY --chown=node:node . .

WORKDIR dist/apps/api

CMD [ "node", "main.js" ]