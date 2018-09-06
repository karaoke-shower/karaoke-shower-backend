var SongModel = require('../models/song-model')

function findAll (req, res, next) {
  SongModel.find({}, function (err, songs) {
    if (err) console.log(err)
    res.send(songs)
  })
}
function findById (req, res, next) {
  SongModel.findOne({id: req.params.id}, function (err, song) {
    if (err) console.log(err)
    res.send(song)
  })
}
function create (req, res, next) {
  let newSong = new SongModel(req.body)
  newSong.save(function (err, song) {
    if (err) console.log(err)
    res.send(song)
  })
}
function update (req, res, next) {
  SongModel.findOne({name: req.params.id}, function (err, song) {
    if (err) console.log(err)

    song.artist = req.body.artist ? req.body.artist :  song.artist
    song.author = req.body.author ? req.body.author :  song.author
    song.genre = req.body.genre ? req.body.genre :  song.genre
    song.title = req.body.title ? req.body.title :  song.title
    song.year = req.body.year ? req.body.year :  song.year
    song.album = req.body.album ? req.body.album :  song.album
    song.label = req.body.label ? req.body.label :  song.label
    song.lyrics = req.body.lyrics ? req.body.lyrics :  song.lyrics
    song.duration = req.body.duration ? req.body.duration :  song.duration
    song.audio_url = req.body.audio_url ? req.body.audio_url :  song.audio_url
    
    song.save(function (err, savedSong) {
      if (err) console.log(err)
      res.send(savedSong)
    })
  })
}
function remove (req, res, next) {
  SongModel.findOne({id: req.params.id}, function (err, res) {
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