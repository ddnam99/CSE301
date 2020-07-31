FROM node:12.18-alpine as builder

WORKDIR /app
ENV JITSI_API=http://localhost:4567

COPY package.json .
RUN npm install 

COPY . .
RUN npm run build

FROM nginx:1.14.2-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD nginx -g 'daemon off;'