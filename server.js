//1.1 include expressjs
var express = require('express');

//3.1 body-parser include
var bodyParser = require('body-parser');

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
  res.send(questions);
})

//2.3 add base route for questions
app.get('/question/:id', (req, res) => {
  console.log(req.params);
  res.send(questions.find((question)=>{return question.id === Number(req.params.id)}));
})

//3.3 add post route
app.post('/questions', (req, res) => {
  console.log(req.body);
  questions.push(req.body);
  res.send(questions);
})

//1.4 add listen
app.listen(3012, function() {
  console.log('API app started');
})
