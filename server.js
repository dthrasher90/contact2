var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);

var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/contactlist', function(req, res){
  console.log("i received a get request");

db.contactlist.find(function(err, docs){
  console.log(docs);
  res.json(docs);

})


});

app.use(bodyParser.json());


var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/contactlist';



MongoClient.connect(url, function(err, db){
  if (err) {
    console.log('unable to connect to the mongodb server.  Error:', err);
  } else {
    console.log('Hurray, we have succesffuly connected to the mongdb server');

  };

});


 db.collection('contactlist').find().toArray(function (err, result){
    if (err) throw err

    console.log(result);

})

app.listen(3000);
console.log("server running on port 3000");
