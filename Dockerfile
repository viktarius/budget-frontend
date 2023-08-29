FROM node:16-alpine

WORKDIR /src/app/

RUN npm install -g @angular/cli@16

COPY package.json package-lock.json ./

RUN npm ci

ADD . .

EXPOSE 4200
