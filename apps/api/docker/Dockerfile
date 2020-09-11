FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

# RUN npm run nx build api -- --configuration=${CONFIGURATION}
RUN npm run nx build api

FROM robinrpr/nginx-nodejs:latest
ARG NGINX_CONFIG

RUN mkdir -p /home/app
WORKDIR /home/app

# Add Node.js app
RUN mkdir -p /home/app/node_modules
COPY --from=builder home/node/app/dist/apps/api/* /home/app/
COPY --from=builder home/node/app/package.json /home/app/

# (HACK) Copy node_modules
COPY --from=builder home/node/app/node_modules /home/app/node_modules/

# Update NGINX Config
COPY --from=builder home/node/app/nginx/apps/api/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf

# Append to Supervisord Config
RUN echo '[program:nodejs]\n\
directory=/home/app\n\
command=node main.js\n\
environment=HOST=0.0.0.0\n'\
>> /etc/supervisor/conf.d/nginx-nodejs.conf

# Start all
CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
