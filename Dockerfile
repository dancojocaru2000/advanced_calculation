FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .

ENV PORT=8080
EXPOSE 8080

CMD [ "node", "src/index.js" ]