# Etapa 1: dependencias
FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev


# Etapa 2: ejecución
FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY package*.json ./

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]