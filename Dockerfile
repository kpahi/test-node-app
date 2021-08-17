FROM node:lts-alpine3.14
LABEL maintainer="kritishpahi@gmail.com"

ARG MODE
ENV NODE_ENV=$MODE

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy both package.json AND package-lock.json
COPY package*.json ./

RUN npm install

# Copy all source files
COPY . .

CMD [ "node", "index.js" ]
