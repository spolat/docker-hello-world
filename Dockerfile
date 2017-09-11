FROM node:6.11
WORKDIR /etc/src/app
COPY package.json /etc/src/app
RUN npm install
COPY . /etc/src/app
CMD node index.js
EXPOSE 3000