'use strict';

module.exports.getFile = function(request, response) {
    response.sendFile(__dirname + '/views/index.htm');
}

module.exports.getTimestamp = function(request, response) {
    var date_string = request.params.date_string;

    if (date_string == undefined)
        date_string = new Date().toString();
    var unixTimestamp = timeUNIX(date_string);
    var utcTimestamp = timeUTC(date_string);
    var result;
    console.log(typeof(unixTimestamp));
    console.log(unixTimestamp);
    if (unixTimestamp == NaN)
        result = { error: "Invalid Date" };
    else {
        result = { unix: timeUNIX(date_string), utc: timeUTC(date_string) };
    }
    response.json(result);
}

function timeUTC(s) {
    if (s.includes('-'))
        return new Date(s).toUTCString();
    return new Date(s * 1e3).toUTCString();
}

function timeUNIX(date) {
    if (date.includes('-'))
        return Date.parse(date);
    return date;
}