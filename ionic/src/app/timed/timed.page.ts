import { Component } from '@angular/core';
import { State, StateService } from '../state.service';
import { Subject, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timed',
  templateUrl: 'timed.page.html',
  styleUrls: ['timed.page.scss']
})
export class TimedPage {

  public stateService: StateService;

  stopSubject = new Subject();

  speedSetting = 30;
  seconds = 0;

  constructor(stateService: StateService) {
    this.stateService = stateService;
    this.stateService.setSpeed(this.speedSetting);
  }

  get State() {
    return State;
  }

  stop() {
    if (this.stateService.getState() !== State.stopped) {
      this.stateService.setState(State.stopped);
      this.stopSubject.next();
    }
  }

  updateSpeed() {
    console.log('updateSpeed', this.speedSetting);
    this.stateService.setSpeed(this.speedSetting);
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
