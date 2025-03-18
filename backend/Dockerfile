# Sử dụng Node.js base image
FROM node:16-alpine

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép source code vào container
COPY . .

# Expose port mà ứng dụng Node.js chạy
EXPOSE 3000

# Lệnh chạy ứng dụng Node.js
CMD ["node", "server.js"]