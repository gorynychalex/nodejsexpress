//6.7 import questions models
var Questions = require('../models/questions');

//6.14 import ObjectID
var ObjectID = require('mongodb').ObjectID;

//6.8 exports all
exports.all = (req, res) => {
  Questions.all((err, docs) => {
    if(err) { return res.sendStatus(500); }
    res.send(docs);
  })
}

//6.13 export findById
exports.findById = (req, res) => {
  
  Questions.findById (req.params.id, (err, docs) => {
    if(err) { return res.sendStatus(500); }
    res.send(docs);
  })
}

//6.18 export create
exports.create = (req, res) => {
  Questions.create(req.body, (err, result)=> {
    if(err) { return res.sendStatus(500);
      res.send(req.body);
    }
  });
}
