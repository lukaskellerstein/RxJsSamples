import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transformation2',
  templateUrl: './transformation2.component.html',
  styleUrls: ['./transformation2.component.scss']
})
export class Transformation2Component implements OnInit {
  value1: string;

  value1_a: string;
  value1_b: string;
  value1_c: string;
  value1_d: string;

  value2_a: string;
  value2_b: string;
  value2_c: string;
  value2_d: string;

  constructor() {}

  ngOnInit() {
    const b = document.querySelector('#mybutton');

    fromEvent(b, 'click').subscribe((value: MouseEvent) => {
      this.value1 = value.timeStamp.toString();
    });

    fromEvent(b, 'click')
      .pipe(
        map((value: MouseEvent) => {
          return value.timeStamp.toString() + 'x';
        })
      )
      .subscribe(value => {
        this.value1_a = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        concatMap((value: MouseEvent) => {
          return of(value.timeStamp.toString() + 'x');
        })
      )
      .subscribe(value => {
        this.value1_b = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        mergeMap((value: MouseEvent) => {
          return of(value.timeStamp.toString() + 'x');
        })
      )
      .subscribe(value => {
        this.value1_c = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        switchMap((value: MouseEvent) => {
          return of(value.timeStamp.toString() + 'x');
        })
      )
      .subscribe(value => {
        this.value1_d = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        map((value: MouseEvent) => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_a = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        concatMap((value: MouseEvent) => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_b = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        mergeMap((value: MouseEvent) => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_c = value.toString();
      });

    fromEvent(b, 'click')
      .pipe(
        switchMap((value: MouseEvent) => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_d = value.toString();
      });
  }
}
