# Základní obraz - Node.js
FROM node:20.9.0

# Nastaví pracovní adresář v kontejneru
WORKDIR /app

# Kopíruje soubory package.json a package-lock.json
COPY package*.json ./

# Instaluje závislosti projektu
RUN npm install

# Kopíruje zbytek aplikace do kontejneru
COPY . .

# Sestaví aplikaci
RUN npm run build

# Instaluje globálně http-server pro spuštění sestavené aplikace
RUN npm install -g http-server

# Spustí http-server na portu 80
CMD ["http-server", "dist", "-p", "3000"]
