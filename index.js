var express = require('express');
var path = require('path');
var app = express();


//app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*
app.get('/hello', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET1');
});
*/
app.get('/faaiza1', function(req, res){
  //res.send("Hello Faaiza");
  res.render('index', {title:'Faaiza Cooking'});
});

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
