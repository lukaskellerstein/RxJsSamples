import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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



  constructor() { }

  ngOnInit() {

    this.stream1$ = Observable.interval(1000);
    this.stream2$ = Observable.interval(800);
    this.stream3$ = Observable.interval(600);
    

    Observable.concat(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe((value) => {
        this.value1_a = value.toString();
      });

    Observable.merge(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe((value) => {
        this.value1_b = value.toString();
      });



      Observable.zip(
        this.stream1$,
        this.stream2$,
        this.stream3$
      )
        .subscribe(([timerValOne, timerValTwo, timerValThree]) => {
  
          this.value1_c = timerValOne + " - " + timerValTwo + " - " + timerValThree;
        });


    Observable.combineLatest(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {

        this.value1_d = timerValOne + " - " + timerValTwo + " - " + timerValThree;
      });

    Observable.forkJoin(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {

        this.value1_e = timerValOne + " - " + timerValTwo + " - " + timerValThree;
      });




  }


}
