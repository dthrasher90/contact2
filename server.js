
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var MongoClient = require('mongodb').MongoClient;
var db = mongojs('contactlist',['contactlist']);

app.use(express.static(__dirname + "/public"));

var url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

});

app.get('/contactlist', function(req, res){
  console.log("i received a get request");

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);

  })
});

app.get('/', function(req, res){
  console.log("get /");
  res.sendFile('index.html');
});




app.listen(3000);
console.log('Now listening at port 3000');
