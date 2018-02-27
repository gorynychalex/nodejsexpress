//1.1 include expressjs
var express = require('express');

//3.1 body-parser include
var bodyParser = require('body-parser');

//4.1 mongodb include and MongoClient initialize
var MongoClient = require('mongodb').MongoClient;

//4.6.1 include ObjectID
var ObjectID = require('mongodb').ObjectID;

//5.2 include db.js
var db = require('./db');

//1.2 instance of express
var app = express();

//3.2 body-parser insert into app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//2.2 add json-struct
var questions = [
  {
    id: 1,
    title: 'What gives Java its write once and run anywhere nature?',
    answers: [{id: 1, title: 'The bytecode', correct: 'true'},{id: 2, title: 'virtual machine', correct: 'false'},{id: 3, title: 'Specific type of functions', correct: 'false'}]
  },
  {
    id: 2,
    name: 'What is classloader?',
    answers: [{id: 1, title: 'is a subsystem of JVM that is used to load classes and interfaces', correct: 'true'},{id: 2, title: 'virtual machine', correct: 'false'},{id: 3, title: 'Specific type of functions', correct: 'false'}]
  }
];

//1.3 first root route 
app.get('/', function (req, res) {
  res.send('Hello API');
})

//2.2 add base route for questions
app.get('/questions', (req, res)=> {
  
  //4.5 insert find question
  //5.8 add db.getState()
  db.getState().collection('questions').find().toArray((err,docs) => {
    if(err) { console.log(err); return res.sendStatus(500); }
    res.send(docs);
  })
})

//2.3 add base route for questions
app.get('/question/:id', (req, res) => {
  console.log(req.params);

  //5.8 add db.getState()
  db.getState().collection('questions').findOne({ _id: ObjectID(req.params.id)}, (err,docs)=> {if(err) {throw err} res.send(docs)})
})

//3.3 add post route
app.post('/questions', (req, res) => {
  console.log(req.body);
  //var question1 = { title: req.body.title };

  //4.4 insert data
  //5.8 add db.getState()
  db.getState().collection("questions").insert(req.body, (err, result) => {
    if(err){ console.log(err); return res.sendStatus(500); }
    res.send(req.body);
    
  })
})

//3.4 add put route
app.put('/question/:id', (req, res) => {

  //4.7 insert update()
  //5.8 add db.getState()
  db.getState().collection("questions").update(
    { _id: ObjectID(req.params.id) },
    { title: req.body.title },
    (err, result) => { if(err) throw err; res.sendStatus(200); }
  )
})


//3.5 add delete route
app.delete('/question/:id', (req, res) => {

  //4.8 insert delete()
  //5.8 add db.getState()
  db.getState().collection("questions").deleteOne(
    { _id: ObjectID(req.params.id) },
    (err, result) => { if(err) throw err; res.sendStatus(200);}
  )
})


//4.3 db initialize and include app.listen()
//5.9. Modify MongoClient.connect to db.connect
db.connect('mongodb://localhost:27017/', (err) => {
  if(err) throw err;

  //1.4 add listen
  app.listen(3012, function() {
    console.log('API app started');
  })

});
