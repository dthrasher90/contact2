
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);



mongoose.connect('mongodb://localhost:27017/contactlist');

db.collection('contactlist').find().toArray(function (err, result){

   console.log(result);
})


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.listen(3000);
console.log('Now listening at port 3000');

db.collection('contactlist').find().toArray(function (err, result){


    console.log(result);
})



//======================= Routes ====================================

// app.get('*', function(req, res) {
//      res.sendfile('./public/index.html');
//
//  });
app.get('/contactlist', function(req, res){
 console.log("this is the get request route speaking");
    contactlist.find(function(err,contactlist){

      if (err)
        res.send(err)

        res.json(contactlist);
        console.log('contactlist');
    });
});

app.post('/contactlist', function(req, res) {
       contactlist.create({
           text : req.body.text,
           done : false
       }, function(err, todo) {
           if (err)
               res.send(err);


           contactlist.find(function(err, todos) {
               if (err)
                   res.send(err)
               res.json(todos);
           });
       });



   });

   app.delete('/contact/:contact_id', function(req, res) {
       contact.remove({
           _id : req.params.todo_id
       }, function(err, todo) {
           if (err)
               res.send(err);


           Todo.find(function(err, todos) {
               if (err)
                   res.send(err)
               res.json(todos);
           });
       });
   });
