import { Component, Input, VERSION } from '@angular/core';
import { map, timer, takeWhile, take } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  name = 'Angular ' + VERSION.major;
  display: any;
  // @Input() seconds = 300;

  // timeRemaining$ = timer(0, 1000).pipe(
  //   take(300),
  //   map(n => (300 - n) * 1000),
  //   takeWhile(n => n >= 0),
  // );

  // time = 0

  constructor() {
    // setInterval(() => {
    //   for (let x = 0; x < 10; x++) {
    //     this.time++
    //   }
    // }, 1000);
    this.timer(5);
  }

  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log('finished');
        clearInterval(timer);
      }
    }, 1000);
  }

}
