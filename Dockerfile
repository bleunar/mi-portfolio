FROM node:20-alpine AS builder

WORKDIR /portfolio

COPY portfolio/package*.json ./

RUN apk add --no-cache python3 make g++ \
    && npm cache clean --force \
    && npm install

COPY portfolio ./

RUN npm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /portfolio/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

