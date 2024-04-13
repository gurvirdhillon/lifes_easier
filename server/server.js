const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static((path.join('client'))));

app.listen(port, function () {
  console.log('server is available', port);
});
