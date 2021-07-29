import { Component } from '@angular/core';
import { State, StateService } from '../state.service';
import { Subject, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-manual',
  templateUrl: 'manual.page.html',
  styleUrls: ['manual.page.scss']
})
export class ManualPage {

  public stateService: StateService;

  stopSubject = new Subject();

  speedSetting = 31;
  seconds = 0;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  get State() {
    return State;
  }

  stop() {
    this.stateService.setState(State.stopped);
    this.stopSubject.next();
  }

  start() {
    if (this.stateService.getState() === State.stopped) {
      this.seconds = 0;
    }

    this.stateService.setState(State.running);

    interval(1000)
      .pipe(takeUntil(this.stopSubject))
      .subscribe(seconds => {
        this.seconds++;
      });
  }

  pause() {
    this.stateService.setState(State.paused);
    this.stopSubject.next();
  }

  getElapsed() {
    const min = Math.floor(this.seconds / 60) + '';
    const sec = (this.seconds % 60) + '';
    return `${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
  }
}
