var ArtistModel = require('../models/artist-model')

function findAll (req, res, next) {
  ArtistModel.find({}, function (err, artists) {
    if (err) console.log(err)
    res.send(artists)
  })
}
function findById (req, res, next) {
  ArtistModel.findOne({id: req.params.id}, function (err, artist) {
    if (err) console.log(err)
    res.send(artist)
  })
}
function create (req, res, next) {
  let newArtist = new ArtistModel(req.body)
  newArtist.save(function (err, artist) {
    if (err) console.log(err)
    res.send(artist)
  })
}
function update (req, res, next) {
  ArtistModel.findOne({name: req.params.id}, function (err, artist) {
    if (err) console.log(err)

    artist.name = req.body.name ? req.body.name : artist.name

    artist.save(function (err, savedArtist) {
      if (err) console.log(err)
      res.send(savedArtist)
    })
  })
}
function remove (req, res, next) {
  ArtistModel.findOne({id: req.params.id}, function (err, res) {
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