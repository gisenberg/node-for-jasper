var express = require('express');
var winston = require('winston');
var ESTransport = require('winston-elasticsearch');

var ESClient = require('elasticsearch').Client;
var client = new ESClient({ host: 'localhost:9200', log: 'info' })

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console(),
    new ESTransport({ client: client })
  ]
});

var app = express();
app.get('/', function(req, res) {
  if(Math.random() < 0.10) {
    logger.error({ details: "failed" });
    res.send({status: 'E_FAIL'});
    return;
  }

  logger.info({ details: "foo" });
  res.send({status: 'ok' });
});

app.listen(8080, function() {
  console.log('Server is now listening on http://localhost:8080/');
});
