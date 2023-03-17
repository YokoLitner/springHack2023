FROM node:18-alpine

WORKDIR /server/

COPY /server/package*.json /server/tsconfig.build.json /server/tsconfig.json ./

RUN yarn

COPY /server ./

EXPOSE 3000

CMD ["yarn", "start:dev"]