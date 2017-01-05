var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var MongoClient = require('mongodb').MongoClient;
var db = mongojs('contactlist',['contactlist']);
var ObjectId = require('mongodb').ObjectId;

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
    //find out how to remove via mongojs for line 36
    //http://mongoosejs.com/docs/index.html

  })
});

app.get('/', function(req, res){
  console.log("get /");
  res.sendFile('index.html');
});


app.delete('/contactlist/:id', function(req, res){
  var id = req.params.id;
  console.log("i recieved a delete request", id);
  //console.log (id);
  db.contactlist.remove({_id:ObjectId(id)});
console.log('ObjectId', ObjectId(id))    });



  //  res.json({message: "hi there, got your requst",
  //            object:  id});
// });




app.listen(3000);
console.log('Now listening at port 3000');
