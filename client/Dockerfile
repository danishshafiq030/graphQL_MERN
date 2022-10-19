FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]