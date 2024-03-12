# Base image - Node.js
FROM node:20.9.0

# Sets the working directory in the container
WORKDIR /app

# Copies package.json and package-lock.json files
COPY package*.json ./

# Installs project dependencies
RUN npm install

# Copies the rest of the application into the container
COPY . .

# Builds the application
RUN npm run build

# Installs http-server globally to serve the built application
RUN npm install -g http-server

# Starts the http-server
CMD ["http-server", "dist", "-p", "3000"]
