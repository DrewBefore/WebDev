var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.render('/index');
});

app.listen(5000, function() {
    
  console.log('Node app is running on port', app.get('port'));
});