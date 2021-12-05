FROM alpine 

RUN apk update && apk upgrade && apk add nodejs npm 

COPY . /app
WORKDIR /app

RUN npm install

# TODO: Run release instead of debug
CMD npm run debug