#FROM node:alpine AS builder
#WORKDIR /app
#
#COPY . .
#
#RUN npm install && \
#    npm run build
#
#FROM nginx:alpine
#EXPOSE 80
#COPY --from=builder /app/dist/* /usr/share/nginx/html/

FROM nginx:1.17.1-alpine
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/client-ui /usr/share/nginx/html
