import { Injectable } from '@angular/core';

import { TreadmillService } from './treadmill.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state = State.stopped;
  speed = 0;

  constructor(private treadmillService: TreadmillService) { }

  getState(): State {
    return this.state;
  }

  setState(state: State) {
    this.state = state;

    switch(state) {
      case State.stopped:
      case State.paused:
        this.treadmillService.setSpeed(0);
        break;
      case State.running:
        this.treadmillService.setSpeed(this.speed);
        break;
    }
  }

  setSpeed(speed) {
    this.speed = speed;
    if (this.state === State.running) {
      this.treadmillService.setSpeed(speed);
    }
  }

}

export enum State {
  stopped = 'Stopped',
  running = 'Running',
  paused = 'Paused'
}
