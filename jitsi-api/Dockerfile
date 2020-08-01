FROM node:12.18-alpine

LABEL Author="Duong Duc Nam (nampt1999@gmail.com)"

WORKDIR /app
EXPOSE 4000

COPY package.json .
RUN npm install

COPY . .
CMD npm start