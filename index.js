//Load HTTP module
var path = require('path');
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;
var fs = require('fs');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Create HTTP server and listen on port 3000 for requests
app.get

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
