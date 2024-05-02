FROM node:20.12.0-alpine3.19

WORKDIR /code
COPY package.json .
RUN npm install

EXPOSE 5173

CMD npm run dev
