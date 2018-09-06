var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/karaoke-db')

var LabelSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('label', LabelSchema)