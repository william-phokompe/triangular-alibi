'use strict';

module.exports.getFile = function(request, response) {
    response.sendFile(__dirname + '/views/index.htm');
}

module.exports.getTimestamp = function(request, response) {
    var date_string = request.params.date_string;

    if (date_string) {
        if (!date_string.includes('-'))
            date_string = parseInt(date_string);
        date_string = new Date(date_string);
        if (Object.prototype.toString.call(date_string) === "[object Date]") {
            // it is a date
            console.log(date_string);
            if (isNaN(date_string.getTime())) {  // d.valueOf() could also work
                // date is not valid
                response.json({ error: "Invalid Date1" });
            } else {
                // date is valid
                var epoch = timeUNIX(date_string);
                var standard = date_string.toUTCString();
                response.json({ unix: epoch, utc: standard });
            }
        } else {
            response.json({ error: "Invalid Date2" });
        }
    } else {
        var date_string = new Date();
        response.json({ unix: Math.round(date_string.getTime()/1000), utc: date_string.toUTCString() });
    }
}

function timeUTC(s) {
    if (s.includes('-'))
        return new Date(s).toUTCString();
    return s.toUTCString();
}

function timeUNIX(date) {
    return typeof date == Float32Array ? Math.round(date.getTime()/1000) : date.getTime();
}