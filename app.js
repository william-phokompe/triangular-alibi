'use strict';

module.exports.getFile = function(request, response) {
    response.sendFile(__dirname + '/views/index.htm');
}