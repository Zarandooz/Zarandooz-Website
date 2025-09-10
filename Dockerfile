





# Use official Node.js image as base
FROM node:20-alpine as build-backend
WORKDIR /app
COPY package*.json ./
RUN npm install --production || true
COPY .env .

# Use official Nginx image for static files
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy backend from build stage
COPY --from=build-backend /app/node_modules /app/node_modules
COPY --from=build-backend /app/.env /app/.env

# Install supervisor to run both Nginx and Node.js
RUN apk add --no-cache supervisor
COPY supervisord.conf /etc/supervisord.conf

# Expose port 80
EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
