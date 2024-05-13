# Node container
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./packages/status/package.json ./package.json
RUN npm install

# Bundle app source
COPY ./packages/status .

EXPOSE 3000
CMD [ "npm", "start" ]
