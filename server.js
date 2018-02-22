var express = require('express');

var app = express();

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

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.get('/questions', function (req, res) {
  res.send(questions);
})

app.listen(3012, function() {
  console.log('API app started');
})
