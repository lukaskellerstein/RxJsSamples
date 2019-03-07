import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';

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

  constructor() {}

  ngOnInit(): void {
    /* ****************************************************** */
    /* CREATIONAL operators */
    /* ****************************************************** */

    this.value1$ = interval(1000).pipe(
      map(value => {
        return value.toString();
      })
    );

    let tempValues = ['a', 'b', 'c', 'd'];
    this.value2$ = of(tempValues).pipe(
      map(value => {
        return value.toString();
      })
    );

    let tempValues2 = ['a', 'b', 'c', 'd'];
    this.value3$ = from(tempValues2).pipe(
      map(value => {
        return value.toString();
      })
    );

    this.value4$ = fromEvent(document, 'mousemove').pipe(
      map((value: MouseEvent) => {
        return 'X: ' + value.clientX + ' Y: ' + value.clientY;
      })
    );

    const button = document.querySelector('#mybutton');
    this.value5$ = fromEvent(button, 'click').pipe(
      map((value: MouseEvent) => {
        return Math.round(value.timeStamp).toString();
      })
    );

    /* ****************************************************** */
    /* TRANSFORMATION operators */
    /* ****************************************************** */

    /************ SCAN ***************************/
    this.value1$
      .pipe(
        scan((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value1_scan = value;
      });

    this.value2$
      .pipe(
        scan((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value2_scan = value;
      });

    this.value3$
      .pipe(
        scan((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value3_scan = value;
      });

    this.value4$
      .pipe(
        scan((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value4_scan = value;
      });

    this.value5$
      .pipe(
        scan((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value5_scan = value;
      });

    /************ REDUCE ***************************/
    this.value1$
      .pipe(
        reduce((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value1_reduce = value;
      });

    this.value2$
      .pipe(
        reduce((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value2_reduce = value;
      });

    this.value3$
      .pipe(
        reduce((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value3_reduce = value;
      });

    this.value4$
      .pipe(
        reduce((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value4_reduce = value;
      });

    this.value5$
      .pipe(
        reduce((accumulationValue, currentValue) => {
          return accumulationValue + currentValue;
        })
      )
      .subscribe(value => {
        this.value5_reduce = value;
      });
  }
}
