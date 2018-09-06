var GenreModel = require('../models/genre-model')

function findAll (req, res, next) {
  GenreModel.find({}, function (err, genres) {
    if (err) console.log(err)
    res.send(genres)
  })
}
function findById (req, res, next) {
  GenreModel.findOne({id: req.params.id}, function (err, genre) {
    if (err) console.log(err)
    res.send(genre)
  })
}
function create (req, res, next) {
  let newGenre = new GenreModel(req.body)
  newGenre.save(function (err, song) {
    if (err) console.log(err)
    res.send(song)
  })
}
function update (req, res, next) {
  GenreModel.findOne({name: req.params.id}, function (err, genre) {
    if (err) console.log(err)

    genre.name = req.body.name ? req.body.name : genre.name

    genre.save(function (err, savedSong) {
      if (err) console.log(err)
      res.send(savedSong)
    })
  })
}
function remove (req, res, next) {
  GenreModel.findOne({id: req.params.id}, function (err, res) {
    if (err) console.log(err)
    res.remove()
  })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}