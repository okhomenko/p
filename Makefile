init:
	npm install && ./node_modules/.bin/bower install && cd rest && npm install

start:
	node ./node_modules/.bin/http-server app/ -p 15005

