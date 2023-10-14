var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', async (req, res) => {
  const data = await fs.promises.readFile(__dirname + '/' + 'users.json', 'utf8');
  res.end(data);
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});