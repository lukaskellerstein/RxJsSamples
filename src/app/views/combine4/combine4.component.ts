import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, fromEvent, merge, Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine4',
  templateUrl: './combine4.component.html',
  styleUrls: ['./combine4.component.scss']
})
export class Combine4Component implements OnInit {
  stream1$: Observable<number>;
  stream2$: Observable<number>;

  value1: string;
  value2: string;

  value1_a: string;
  value1_b: string;
  value1_c: string;
  value1_d: string;
  value1_e: string;

  constructor() {}

  ngOnInit() {
    this.stream1$ = fromEvent(document, 'mousemove').pipe(
      map((value: MouseEvent) => {
        return value.clientX;
      })
    );

    this.stream2$ = fromEvent(document, 'mousemove').pipe(
      map((value: MouseEvent) => {
        return value.clientY;
      })
    );

    concat(this.stream1$, this.stream2$).subscribe(value => {
      this.value1_a = value.toString();
    });

    merge(this.stream1$, this.stream2$).subscribe(value => {
      this.value1_b = value.toString();
    });

    zip(this.stream1$, this.stream2$).subscribe(
      ([timerValOne, timerValTwo]) => {
        this.value1_c = 'X : ' + timerValOne + ' | Y : ' + timerValTwo;
      }
    );

    combineLatest(this.stream1$, this.stream2$).subscribe(
      ([timerValOne, timerValTwo]) => {
        this.value1_d = 'X : ' + timerValOne + ' | Y : ' + timerValTwo;
      }
    );

    forkJoin(this.stream1$, this.stream2$).subscribe(
      ([timerValOne, timerValTwo]) => {
        this.value1_e = 'X : ' + timerValOne + ' | Y : ' + timerValTwo;
      }
    );
  }
}
