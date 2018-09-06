var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/karaoke-db')

var ArtistSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('artist', ArtistSchema)