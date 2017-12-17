import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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



  constructor() { }

  ngOnInit() {

    this.stream1$ = Observable.fromEvent(document, 'mousemove').map((value: MouseEvent) => {
      return value.clientX;
    });

    this.stream2$ = Observable.fromEvent(document, 'mousemove').map((value: MouseEvent) => {
      return value.clientY;
    });
    

    Observable.concat(
      this.stream1$,
      this.stream2$
    )
      .subscribe((value) => {
        this.value1_a = value.toString();
      });

    Observable.merge(
      this.stream1$,
      this.stream2$
    )
      .subscribe((value) => {
        this.value1_b = value.toString();
      });



      Observable.zip(
        this.stream1$,
        this.stream2$
      )
        .subscribe(([timerValOne, timerValTwo]) => {
  
          this.value1_c = "X : " + timerValOne + " | Y : " + timerValTwo ;
        });


    Observable.combineLatest(
      this.stream1$,
      this.stream2$
    )
      .subscribe(([timerValOne, timerValTwo]) => {

        this.value1_d = "X : " + timerValOne + " | Y : " + timerValTwo ;
      });

    Observable.forkJoin(
      this.stream1$,
      this.stream2$
    )
      .subscribe(([timerValOne, timerValTwo]) => {

        this.value1_e = "X : " + timerValOne + " | Y : " + timerValTwo ;
      });




  }

}
