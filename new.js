var http = require('http');
var options  ={
	host: 'www.google.com',
	path : '/index.html'
};

var req = http.get (options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
}) 