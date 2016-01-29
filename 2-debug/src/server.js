var express = require('express');

var app = express();
app.get('/', function(req, res) {
  if(Math.random() < 0.10) {
    res.send({status: 'E_FAIL'});
    return;
  }

  res.send({status: 'ok' });
});

app.listen(8080, function() {
  console.log('Server is now listening on http://localhost:8080/');
});
