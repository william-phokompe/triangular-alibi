
var express = require('express');
var app = express();
var port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Url = require('./model/URL');
if (process.env.NODE_ENV !== 'production')
  require('dotenv').load();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(
  `${process.env.URI.toString()}&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
).then(() => {
  app.listen(port);
}).then(_ => {
  console.log('All is well at : ' + port);
}).catch((err) => {
  console.log('DB Connection Error: ' + err);
});

var routes = require('./control/routes');
routes(app);
