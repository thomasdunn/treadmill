const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static('../ionic/www'));

server.listen(80, () => {
  console.log('listening on *:80');
});
