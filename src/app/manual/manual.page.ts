import { Component } from '@angular/core';
import { State, StateService } from '../state.service';

@Component({
  selector: 'app-manual',
  templateUrl: 'manual.page.html',
  styleUrls: ['manual.page.scss']
})
export class ManualPage {

  public stateService: StateService;

  speedSetting = 0;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  get State() {
    return State;
  }

  stop() {
    this.stateService.setState(State.stopped);
  }

  start() {
    this.stateService.setState(State.running);
  }

  pause() {
    this.stateService.setState(State.paused);
  }
}
