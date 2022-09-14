FROM node:16.17.0-alpine3.14

USER node

WORKDIR /usr/app

CMD [ "/usr/app/start.sh" ]