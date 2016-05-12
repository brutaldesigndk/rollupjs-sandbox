var connect = require('connect'),
	static = require('serve-static'),
	livereload = require('livereload');

var server = connect();

server.listen(8000);
server.use(  static(__dirname + '/'));

console.log ('server running on localhost:8000');
console.log ('livereload running on port: 35729');

server = livereload.createServer();
server.watch(__dirname + "/");