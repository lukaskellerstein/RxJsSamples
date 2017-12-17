import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-combine1',
  templateUrl: './combine1.component.html',
  styleUrls: ['./combine1.component.scss']
})
export class Combine1Component implements OnInit {


  stream1$: Observable<string>;
  stream2$: Observable<string>;
  stream3$: Observable<string>;

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

    const stream1 = ["a", "b", "c", "d"];
    const stream2 = ["A", "B", "C", "D"];
    const stream3 = ["1", "2", "3", "4"];

    this.stream1$ = Observable.from(stream1);
    this.stream2$ = Observable.from(stream2);
    this.stream3$ = Observable.from(stream3);


    Observable.of(stream1).subscribe((value) => {

      let result = "";
      stream1.forEach(element => {
        result += element + " - ";
      });
      result += " |";

      this.value1 = result;
    });

    Observable.of(stream2).subscribe((value) => {

      let result = "";
      stream2.forEach(element => {
        result += element + " - ";
      });
      result += " |";

      this.value2 = result;
    });

    Observable.of(stream3).subscribe((value) => {

      let result = "";
      stream3.forEach(element => {
        result += element + " - ";
      });
      result += " |";

      this.value3 = result;
    });






    Observable.concat(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe((value) => {
        this.value1_a = value;
      });

    Observable.merge(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe((value) => {
        this.value1_b = value;
      });


    Observable.combineLatest(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {

        this.value1_c = timerValOne + " - " + timerValTwo + " - " + timerValThree;
      });

    Observable.forkJoin(
      this.stream1$,
      this.stream2$,
      this.stream3$
    )
      .subscribe(([timerValOne, timerValTwo, timerValThree]) => {

        this.value1_d = timerValOne + " - " + timerValTwo + " - " + timerValThree;
      });


      Observable.zip(
        this.stream1$,
        this.stream2$,
        this.stream3$
      )
        .subscribe(([timerValOne, timerValTwo, timerValThree]) => {
  
          this.value1_e = timerValOne + " - " + timerValTwo + " - " + timerValThree;
        });



  }

}
