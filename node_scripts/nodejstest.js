var http = require("http");
var express = require('express');
var dateTime = require("node-dateTime");
var app = express();

//app.get('/', function(req, res) {
//  res.send('Hello World! '+ dateTime.create().format("Y-m-d H:M:S"));
//});

app.use('/test', express.static("."));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});