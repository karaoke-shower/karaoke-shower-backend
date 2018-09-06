var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/karaoke-db')

var GenreSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('genre', GenreSchema)