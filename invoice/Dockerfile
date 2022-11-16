FROM node:16.15.1-alpine

RUN mkdir -p /home/node/invoice/node_modules && chown -R node:node /home/node/invoice

WORKDIR /home/node/invoice

COPY  package*.json ./

USER root

RUN npm install 

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "index.js" ]