const express = require('express');
const app = express();

app.get('/gugu/:n1/:n2', function (req, res, next) {
  var i = req.params.n1;
  var j = req.params.n2;
  if (!isNaN(i) && !isNaN(j) && i != undefined && j != undefined) {
    s = i + "*" + j + "=" + (i * j);
    res.end(s);
  } else { res.end('Error') }
}).listen(3000);
