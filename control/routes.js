'use strict';

module.exports = function(app) {
    var callBack = require('../app');
    // http://expressjs.com/en/starter/basic-routing.html
    app.route('/')
        .get(callBack.getFile);
}