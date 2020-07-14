FROM node:12.18-alpine

WORKDIR /usr/src/app
EXPOSE 3000

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

CMD npm run serve