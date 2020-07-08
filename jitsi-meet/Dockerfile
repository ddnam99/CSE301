FROM node:12.18-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install

COPY . .

EXPOSE 1234
CMD npm start