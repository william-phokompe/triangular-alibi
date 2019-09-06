var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

var routes = require('./control/routes');
routes(app);

// listen for requests :)
var listener = app.listen(port, function() {
  console.log('Your app is listening on port: ' + port);
});
