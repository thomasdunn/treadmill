import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  state = State.stopped;

  constructor() { }

  getState(): State {
    return this.state;
  }

  setState(state: State) {
    this.state = state;
  }

}

export enum State {
  stopped = 'Stopped',
  running = 'Running',
  paused = 'Paused'
}
