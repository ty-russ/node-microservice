FROM node:16.15.1-alpine

RUN mkdir -p /home/node/blogs/node_modules && chown -R node:node /home/node/blogs

WORKDIR /home/node/blogs

COPY  package*.json ./

USER root

RUN  npm install 

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "index.js" ]