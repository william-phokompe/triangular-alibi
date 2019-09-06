var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.htm');
});

// listen for requests :)
var listener = app.listen(port, function() {
  console.log('Your app is listening on port: ' + port);
});
