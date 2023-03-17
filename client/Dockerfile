FROM node:18-alpine

WORKDIR /client/

COPY /client/package*.json /client/tsconfig.node.json /client/tsconfig.json /client/vite.config.ts ./

RUN yarn

COPY /client ./

EXPOSE 5173

CMD ["yarn", "build"]