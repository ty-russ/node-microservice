FROM node:16.15.1-alpine

RUN mkdir -p /home/node/auth/node_modules && chown -R node:node /home/node/auth

WORKDIR /home/node/auth

COPY  package*.json ./

USER root

RUN  npm install 

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm" ,"run" ,"start" ]