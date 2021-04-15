FROM node:10.1
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build
USER node
EXPOSE 3000
CMD npm start