var LabelModel = require('../models/label-model')

function findAll (req, res, next) {
  LabelModel.find({}, function (err, labels) {
    if (err) console.log(err)
    res.send(labels)
  })
}
function findById (req, res, next) {
  LabelModel.findOne({id: req.params.id}, function (err, label) {
    if (err) console.log(err)
    res.send(label)
  })
}
function create (req, res, next) {
  let newLabel = new LabelModel(req.body)
  newLabel.save(function (err, label) {
    if (err) console.log(err)
    res.send(label)
  })
}
function update (req, res, next) {
  LabelModel.findOne({name: req.params.id}, function (err, label) {
    if (err) console.log(err)

    label.name = req.body.name ? req.body.name : label.name

    label.save(function (err, savedLabel) {
      if (err) console.log(err)
      res.send(savedLabel)
    })
  })
}
function remove (req, res, next) {
  LabelModel.findOne({id: req.params.id}, function (err, res) {
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