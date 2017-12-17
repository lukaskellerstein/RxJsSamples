import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transformation4',
  templateUrl: './transformation4.component.html',
  styleUrls: ['./transformation4.component.scss']
})
export class Transformation4Component implements OnInit {

  value1$: Observable<string>;
  value2$: Observable<string>;
  value3$: Observable<string>;
  value4$: Observable<string>;
  value5$: Observable<string>;

  value1_scan: string;
  value2_scan: string;
  value3_scan: string;
  value4_scan: string;
  value5_scan: string;

  value1_reduce: string;
  value2_reduce: string;
  value3_reduce: string;
  value4_reduce: string;
  value5_reduce: string;


  constructor() { }


  ngOnInit(): void {


    /* ****************************************************** */
    /* CREATIONAL operators */
    /* ****************************************************** */

    this.value1$ = Observable.interval(1000).map((value) => {
      return value.toString();
    });


    let tempValues = ["a", "b", "c", "d"];
    this.value2$ = Observable.of(tempValues).map((value) => {
      return value.toString();
    });

    let tempValues2 = ["a", "b", "c", "d"];
    this.value3$ = Observable.from(tempValues2).map((value) => {
      return value.toString();
    });


    this.value4$ = Observable.fromEvent(document, 'mousemove').map((value: MouseEvent) => {
      return "X: " + value.clientX + " Y: " + value.clientY;
    });

    const button = document.querySelector('#mybutton');
    this.value5$ = Observable.fromEvent(button, 'click').map((value: MouseEvent) => {
      return Math.round(value.timeStamp).toString();
    });




    /* ****************************************************** */
    /* TRANSFORMATION operators */
    /* ****************************************************** */


    /************ SCAN ***************************/
    this.value1$
      .scan((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value1_scan = value
      });

    this.value2$
      .scan((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value2_scan = value
      });

    this.value3$
      .scan((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value3_scan = value
      });

    this.value4$
      .scan((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value4_scan = value
      });

    this.value5$
      .scan((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value5_scan = value
      });


    /************ REDUCE ***************************/
    this.value1$
      .reduce((accumulationValue, currentValue) => {
        return accumulationValue + currentValue;
      })
      .subscribe((value) => {
        this.value1_reduce = value
      });

    this.value2$
    .reduce((accumulationValue, currentValue) => {
      return accumulationValue + currentValue;
    })
      .subscribe((value) => {
        this.value2_reduce = value
      });

    this.value3$
    .reduce((accumulationValue, currentValue) => {
      return accumulationValue + currentValue;
    })
      .subscribe((value) => {
        this.value3_reduce = value
      });

    this.value4$
    .reduce((accumulationValue, currentValue) => {
      return accumulationValue + currentValue;
    })
      .subscribe((value) => {
        this.value4_reduce = value
      });

    this.value5$
    .reduce((accumulationValue, currentValue) => {
      return accumulationValue + currentValue;
    })
      .subscribe((value) => {
        this.value5_reduce = value
      });




  }

}
