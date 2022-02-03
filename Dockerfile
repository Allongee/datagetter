# Specify a base image
from node:16.13.2-slim

# install dependencies
WORKDIR /usr/app
COPY package.json ./
COPY tsconfig*.json ./
COPY . /usr/app
RUN npm install

# Builds the package
RUN npm run build

# run getData
RUN node dist/getData.js