FROM node:latest as builder
ARG CONFIGURATION

USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node . .
RUN if [ ! -d "node_modules" ]; then npm install; fi

#RUN npm run nx build api -- --configuration=${CONFIGURATION} // Not supported yet
RUN npm run nx build api

From ubuntu:trusty
ARG NGINX_CONFIG

# Set noninteractive mode for apt-get
ENV DEBIAN_FRONTEND noninteractive

# Update
RUN apt-get update

RUN apt-get -y install supervisor software-properties-common logrotate curl

# Install Node.js Latest
RUN curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash - \
 && sudo apt-get install -y nodejs
 
# Install Nginx Stable
RUN add-apt-repository ppa:nginx/stable && apt-get update \
 && apt-get -y install nginx-full \
 && echo "daemon off;" >> /etc/nginx/nginx.conf

# Create Supervisord Log
RUN mkdir -p /var/log/supervisord
RUN touch /tmp/supervisord.log

# Supply Config file
RUN echo '[supervisord]\n\
nodaemon=true\n\
childlogdir=/var/log/supervisord/\n\
logfile=/tmp/supervisord.log\n\
[program:nodejs]\n\
directory=/home/app\n\
command=node main.js\n\
environment=HOST=0.0.0.0\n\
[program:nginx]\n\
command=/usr/sbin/nginx -c /etc/nginx/nginx.conf\n\
[program:rsyslog]\n\
command=/usr/sbin/rsyslogd -n -c3\n\
[program:cronjob]\n\
command=/usr/sbin/cron -f\n'\
>> /etc/supervisor/conf.d/nginx-nodejs.conf

COPY --from=builder home/node/app/nginx/apps/api/${NGINX_CONFIG} /etc/nginx/conf.d/default.conf

# Add Node.js app
RUN mkdir -p /home/app
COPY --from=builder home/node/app/dist/apps/api/* /home/app/
COPY --from=builder home/node/app/package.json /home/app/

# Install app packages
WORKDIR /home/app

RUN npm i

# Start Supervisord
CMD ["supervisord", "-c", "/etc/supervisor/supervisord.conf"]
