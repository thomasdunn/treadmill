const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('../ionic/www'));

server.listen(80, () => {
  console.log('listening on *:80');
});

io.on('connection', (socket) => {
  console.log('web client connected');

  socket.on('set-speed', speed => {
    const speedValue = parseInt(speed);

    if (! isNaN(speedValue) && speedValue >= 0 && speedValue <= 127) {
      console.log(`Speed: ${speed}`);
    }
  });
});
