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

//6.9 import questions controller
var questionsController = require('./controllers/questions.js');

//1.2 instance of express
var app = express();

//3.2 body-parser insert into app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//1.3 first root route 
app.get('/', function (req, res) {
  res.send('Hello Questions API');
})

//2.2 add base route for questions
//6.11 modify
app.get('/questions', questionsController.all);

//2.3 add base route for questions
//6.12 
app.get('/question/:id', questionsController.findById);

//3.3 add post route
app.post('/questions', questionsController.create);

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
