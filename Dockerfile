FROM node:13.12.0-alpine
WORKDIR /src
COPY package.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

CMD ["npm", "start"]

