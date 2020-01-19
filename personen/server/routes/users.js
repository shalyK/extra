var express = require('express');
var router = express.Router();
// const MongoClient = require('mongodb').MongoClient

var mongo = require('mongodb');

mongo.MongoClient.connect('mongodb://localhost:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('apti')
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection("personen").find().toArray((err, result) => {
  res.json(result);
  });
});

router.get('/:naam', function(req, res, next) {
  db.collection("personen").findOne({naam: req.params.naam},(err, result) => {
  res.json(result);
  });
});
router.post('/toevoegen', (req, res) => {
  db.collection("personen").insertOne({naam: req.body.naam, datum: req.body.datum}, (err, response) => res.json(response))
});

router.delete('/:naam', (req, res) => {
  db.collection("personen").deleteOne({naam: req.params.naam}, (err, result) => res.json(result))
})

router.put('/:id', function(req, res, next) {
  var o_id = new mongo.ObjectID(req.params.id);
  var myquery = { _id: o_id };
  var newvalues = { $set: {naam: req.body.naam, datum: req.body.datum} };
  db.collection("personen").updateOne(myquery, newvalues, function(err, result) {
    res.json(result);
  });
});


module.exports = router;
