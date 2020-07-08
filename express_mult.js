const express = require('express');
const app = express();

app.get('/', function (req, res) {
  s = ""
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      s = s + j + "*" + i + "=" + (j * i) + " ";
    }
    s = s + "\n";
  }
  res.end(s);
}).listen(3000);