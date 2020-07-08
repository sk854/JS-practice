const express = require('express');
const app = express();

app.get('/gugu/:n1/:n2', function (req, res) {
  var i = req.params.n1;
  var j = req.params.n2;
  s = i + "*" + j + "=" + (i * j);
  res.end(s);
}).listen(3000);