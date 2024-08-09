FROM node:lts

WORKDIR /app

COPY . .

RUN npm install
RUN npm install axios
RUN npm install vite
RUN npm install react-router-dom
RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p 

CMD ["npm", "run",  "dev"]