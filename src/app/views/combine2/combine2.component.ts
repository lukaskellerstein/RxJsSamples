import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-combine2',
  templateUrl: './combine2.component.html',
  styleUrls: ['./combine2.component.scss']
})
export class Combine2Component implements OnInit {

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

    let rndN1 = Math.round(Math.random()*3000);
    this.stream1$ = Observable.from(stream1).delay(rndN1);

    let rndN2 = Math.round(Math.random()*3000);
    this.stream2$ = Observable.from(stream2).delay(rndN2);

    let rndN3 = Math.round(Math.random()*3000);
    this.stream3$ = Observable.from(stream3).delay(rndN3);


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
