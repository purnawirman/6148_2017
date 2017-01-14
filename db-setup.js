var mongo = require('mongodb').MongoClient;

var dbConnectionUrl = 'mongodb://localhost:27017/test';

var collections = {};

mongo.connect(dbConnectionUrl, function (err, db) {
  if (err) {
    console.log('Can not connect to MongoDB. Did you run it?');
    console.log(err.message);
    return;
  }

  collections.people = db.collection('people');
});


module.exports = collections;
