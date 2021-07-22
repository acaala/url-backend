const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: () => nanoid(4)
    }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)