import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';
import { map, mapTo, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transformation1',
  templateUrl: './transformation1.component.html',
  styleUrls: ['./transformation1.component.scss']
})
export class Transformation1Component implements OnInit {
  value1$: Observable<string>;
  value2$: Observable<string>;
  value3$: Observable<string>;
  value4$: Observable<string>;
  value5$: Observable<string>;

  value1_map: string;
  value2_map: string;
  value3_map: string;
  value4_map: string;
  value5_map: string;

  value1_mapto: string;
  value2_mapto: string;
  value3_mapto: string;
  value4_mapto: string;
  value5_mapto: string;

  value1_mergemap: string;
  value2_mergemap: string;
  value3_mergemap: string;
  value4_mergemap: string;
  value5_mergemap: string;

  value1_switchmap: string;
  value2_switchmap: string;
  value3_switchmap: string;
  value4_switchmap: string;
  value5_switchmap: string;

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

    /************ MAP ***************************/
    this.value1$
      .pipe(
        map(value => {
          return (value = value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value1_map = value;
      });

    this.value2$
      .pipe(
        map(value => {
          return (value = value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value2_map = value;
      });

    this.value3$
      .pipe(
        map(value => {
          return (value = value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value3_map = value;
      });

    this.value4$
      .pipe(
        map(value => {
          return (value = value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value4_map = value;
      });

    this.value5$
      .pipe(
        map(value => {
          return (value = value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value5_map = value;
      });

    /************ MAP TO ***************************/
    this.value1$.pipe(mapTo('HELLO')).subscribe(value => {
      this.value1_mapto = value;
    });

    this.value2$.pipe(mapTo('HELLO')).subscribe(value => {
      this.value2_mapto = value;
    });

    this.value3$.pipe(mapTo('HELLO')).subscribe(value => {
      this.value3_mapto = value;
    });

    this.value4$.pipe(mapTo('HELLO')).subscribe(value => {
      this.value4_mapto = value;
    });

    this.value5$.pipe(mapTo('HELLO')).subscribe(value => {
      this.value5_mapto = value;
    });

    /************ FLATMAP = MERGEMAP ***************************/
    this.value1$
      .pipe(
        mergeMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value1_mergemap = value;
      });

    this.value2$
      .pipe(
        mergeMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value2_mergemap = value;
      });

    this.value3$
      .pipe(
        mergeMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value3_mergemap = value;
      });

    this.value4$
      .pipe(
        mergeMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value4_mergemap = value;
      });

    this.value5$
      .pipe(
        mergeMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value5_mergemap = value.toString();
      });

    /************ SWITCHMAP ***************************/
    this.value1$
      .pipe(
        switchMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value1_switchmap = value;
      });

    this.value2$
      .pipe(
        switchMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value2_switchmap = value;
      });

    this.value3$
      .pipe(
        switchMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value3_switchmap = value;
      });

    this.value4$
      .pipe(
        switchMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value4_switchmap = value;
      });

    this.value5$
      .pipe(
        switchMap(value => {
          return of(value + 'AAA');
        })
      )
      .subscribe(value => {
        this.value5_switchmap = value.toString();
      });
  }
}
