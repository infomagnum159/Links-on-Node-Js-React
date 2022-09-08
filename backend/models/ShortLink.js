const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true,
    }
});

const ShortUrl = mongoose.model('Link', UrlSchema);

module.exports = ShortUrl;