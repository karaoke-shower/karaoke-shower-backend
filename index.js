const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const SongController = require('./controllers/song-controller')
const ArtistController = require('./controllers/artist-controller')
const GenreController = require('./controllers/genre-controller')
const LabelController = require('./controllers/label-controller')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/songs', SongController.findAll)
app.get('/songs/:id', SongController.findById)
app.post('/songs', SongController.create)
app.put('/songs/:id', SongController.update)
app.delete('/songs/:id', SongController.remove)

app.get('/artists', ArtistController.findAll)
app.get('/artists/:id', ArtistController.findById)
app.post('/artists', ArtistController.create)
app.put('/artists/:id', ArtistController.update)
app.delete('/artists/:id', ArtistController.remove)

app.get('/genres', GenreController.findAll)
app.get('/genres/:id', GenreController.findById)
app.post('/genres', GenreController.create)
app.put('/genres/:id', GenreController.update)
app.delete('/genres/:id', GenreController.remove)

app.get('/labels', LabelController.findAll)
app.get('/labels/:id', LabelController.findById)
app.post('/labels', LabelController.create)
app.put('/labels/:id', LabelController.update)
app.delete('/labels/:id', LabelController.remove)



// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(4000, () => console.log('Example app listening on port 3000!'))
