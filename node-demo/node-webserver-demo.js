var http = require('http');
console.log("Checkout my bad-a web server!!!");
var server = http.createServer(function(request, response) {
    console.log("Hello there! Got a request!");
    response.write("Hi!");
    response.end();
});

server.listen(3000);