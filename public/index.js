var express = require('express');
var app = express();


app.use(express.static('public'));

app.get('/hello', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
