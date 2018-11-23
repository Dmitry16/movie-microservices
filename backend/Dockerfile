FROM node

ARG app_env
ENV APP_ENV=dev

WORKDIR /app

COPY ./ ./

RUN npm install && npm install -g nodemon

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3003; \
	else \
	DEBUG=app:* npm start; \
	fi

EXPOSE 3003