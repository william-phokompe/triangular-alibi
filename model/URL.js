'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
    full_url: {
        type: String,
        required: true
    },
    shortid: {
        type: String,
        required: true
    }
}, { collection: 'short_urls' });

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);