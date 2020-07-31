FROM node:12.18-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install 

COPY . .
ENV JITSI_API=https://cse301.namdd72.tech
RUN npm run build

FROM nginx:1.14.2-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'