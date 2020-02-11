FROM node:8-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false
RUN npm config set depth 0
RUN npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install --ignore-scripts
RUN mkdir /ng-app
RUN cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/npm run build:prod
