This is a sample project to deploy a Hello world web app using grunt and nodewebkit


Install `nodejs` and `npm`

	sudo apt-get install nodejs
	sudo apt-get npm

Install `grunt`

	npm install -g grunt-cli

Install all project dependences

	npm install

Run `grunt` to deploy your project. If error `/usr/bin/env: ‘node’: No such file
or directory` is get:

	sudo ln -s /usr/bin/nodejs /usr/bin/node

`build` and `release` folders will be generated


