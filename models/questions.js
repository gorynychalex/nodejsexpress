//6.3 add var require db.js
var db = require('../db');

//6.14 import ObjectID
var ObjectID = require('mongodb').ObjectID;

//6.4 add all
exports.all = (callback) => {
  db.getState().collection('questions').find().toArray((err, docs) => {
    callback(err,docs);
  })
}

//6.15 exports findById
exports.findById = (id, callback) => {
  db.getState().collection('questions').findOne({ _id: ObjectID(id)}, (err,doc)=>{ 
  callback(err, doc);
  })
}

//6.17 export create entity
exports.create = (question, callback) => {
  db.getState().collection('questions').insert(question, (err, result) => {
    callback(err, result);
  })
}
