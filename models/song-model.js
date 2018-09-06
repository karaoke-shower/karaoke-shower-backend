var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/karaoke-db')

var SongSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    almbum: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    lyrics: {
        type: [[[[
            {
                text: String,
                time: Number 
            }
        ]]]]
    },
    duration: {
        type: Number,
        required: true
    },
    audio_url: String
})

module.exports = mongoose.model('song', SongSchema)