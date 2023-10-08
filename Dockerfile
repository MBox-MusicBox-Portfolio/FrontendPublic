FROM node:18-alpine
EXPOSE 3000

WORKDIR /usr/src/app
RUN mkdir src

COPY ./src ./src
COPY package*.json ./
COPY index.html ./
COPY vite.config.js ./

RUN npm install -- silence

CMD ["npm", "run", "dev"]