FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy static site files
COPY . /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
