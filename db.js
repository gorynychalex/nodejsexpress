//5.1 mongodb include and MongoClient initialize
var MongoClient = require('mongodb').MongoClient;

//5.3 mongo state
var state = { db: null };

//5.4 mongo connect with callback
exports.connect = (url, done) => {
  if(state.db){ return done(); }

  MongoClient.connect(url, (err, client) => {
    if(err) { return done(err); }

    //For mongodb >= 3.0.0: define db-name
    state.db = client.db('myapi');
    done();
  })
}

exports.getState = ()=>{ return state.db; }
