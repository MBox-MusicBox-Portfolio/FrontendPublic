FROM node:20.12-alpine
EXPOSE 5173

WORKDIR /usr/src/app
RUN mkdir src

COPY ./src ./src
COPY package*.json ./
COPY index.html ./
COPY vite.config.js ./

RUN npm install -- silence

CMD ["npm", "run", "dev"]