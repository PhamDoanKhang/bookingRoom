FROM node:18-alpine as builder

WORKDIR /app


COPY package.json ./
COPY package-lock.json ./

RUN yarn install

COPY . .

CMD [ "yarn","start" ];


