import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);
import { ds3502 } from './ds3502.mjs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));

app.use((req, res) => res.sendFile('public/index.html', { root: __dirname }));

server.listen(80, () => {
  console.log('listening on *:80');
});

io.on('connection', (socket) => {
  console.log('web client connected');

  socket.on('set-speed', speed => {
    const speedValue = parseInt(speed);

    if (! isNaN(speedValue) && speedValue >= 0 && speedValue <= 127) {
      console.log(`Speed: ${speed}`);
      ds3502(speedValue);
    }
  });
});

