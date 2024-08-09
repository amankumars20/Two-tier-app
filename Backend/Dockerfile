FROM node:lts

WORKDIR /app

COPY . .

RUN npm install
RUN npm install express
RUN npm install cors
RUN npm install mongoose

EXPOSE 8000

CMD [ "node", "server.js" ]