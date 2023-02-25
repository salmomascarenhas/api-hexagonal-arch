#!/bin/bash

# Se o arquivo .env não existir então o criamos a partir do arquivo de exemplo.
if [ ! -f ".env" ]; then
  cp .env.example .env
fi

npm install

npm run start:dev