'use strict';

module.exports = function(app) {
    var callBack = require('../app');
    // http://expressjs.com/en/starter/basic-routing.html
    app.route('/')
        .get(callBack.getFile);

    app.route('/api/timestamp/:date_string')
        .get(callBack.getTimestamp);
    
    app.route('/api/timestamp/')
        .get(callBack.getTimestamp);

    app.route('/api/whoami')
        .get(callBack.ParseReqHeader);
}