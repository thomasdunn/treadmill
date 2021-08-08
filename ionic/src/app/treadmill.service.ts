import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TreadmillService {

  constructor(private socket: Socket) { }

  go(msg) {
    this.socket.emit('message', msg);
  }
  
  setSpeed(speed) {
    this.socket.emit('set-speed', speed);
  }
}
