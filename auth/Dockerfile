FROM node

WORKDIR /app

COPY package.json ./

RUN npm install && npm install -g nodemon

COPY src /app/src

COPY .env /app

CMD nodemon ./src/server.js

EXPOSE 3001