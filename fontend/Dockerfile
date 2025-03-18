# Sử dụng Node.js base image cho build
FROM node:16-alpine AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép source code vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Sử dụng nginx để phục vụ static files
FROM nginx:alpine

# Sao chép build output từ build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Cấu hình nginx (nếu cần)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Lệnh chạy nginx
CMD ["nginx", "-g", "daemon off;"]