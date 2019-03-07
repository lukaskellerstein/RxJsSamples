import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, interval, merge, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-combine3',
  templateUrl: './combine3.component.html',
  styleUrls: ['./combine3.component.scss']
})
export class Combine3Component implements OnInit {
  stream1$: Observable<number>;
  stream2$: Observable<number>;
  stream3$: Observable<number>;

  value1: string;
  value2: string;
  value3: string;

  value1_a: string;
  value1_b: string;
  value1_c: string;
  value1_d: string;
  value1_e: string;

  constructor() {}

  ngOnInit() {
    this.stream1$ = interval(1000);
    this.stream2$ = interval(800);
    this.stream3$ = interval(600);

    this.stream1$.subscribe(item => {
      console.log(item);
    });

    this.stream2$.subscribe(item => {
      console.log(item);
    });

    this.stream3$.subscribe(item => {
      console.log(item);
    });

    concat(this.stream1$, this.stream2$, this.stream3$).subscribe(value => {
      this.value1_a = value.toString();
    });

    merge(this.stream1$, this.stream2$, this.stream3$).subscribe(value => {
      this.value1_b = value.toString();
    });

    zip(this.stream1$, this.stream2$, this.stream3$).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        this.value1_c =
          timerValOne + ' - ' + timerValTwo + ' - ' + timerValThree;
      }
    );

    combineLatest(this.stream1$, this.stream2$, this.stream3$).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        this.value1_d =
          timerValOne + ' - ' + timerValTwo + ' - ' + timerValThree;
      }
    );

    forkJoin(this.stream1$, this.stream2$, this.stream3$).subscribe(
      ([timerValOne, timerValTwo, timerValThree]) => {
        this.value1_e =
          timerValOne + ' - ' + timerValTwo + ' - ' + timerValThree;
      }
    );
  }
}
