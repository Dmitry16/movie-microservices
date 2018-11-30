FROM node

ARG app_env
ENV APP_ENV=dev

WORKDIR /app

COPY package.json ./

RUN npm install && npm install -g nodemon

COPY src /app/src

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3003; \
	else \
	DEBUG=app:* nodemon ./src/bin/www; \
	fi

EXPOSE 3003