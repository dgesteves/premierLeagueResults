FROM node:12.18.2

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000