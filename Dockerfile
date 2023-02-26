FROM node:18.0.0-slim

RUN apt update && apt install -y procps

RUN npm install -g @nestjs/cli@9

USER node

WORKDIR /home/node/app/

CMD [ "tail", "-f", "/dev/null" ]
