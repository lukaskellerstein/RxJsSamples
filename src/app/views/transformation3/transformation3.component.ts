import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-transformation3',
  templateUrl: './transformation3.component.html',
  styleUrls: ['./transformation3.component.scss']
})
export class Transformation3Component implements OnInit {
  value1: string;

  value1_a: string;
  value1_b: string;
  value1_c: string;
  value1_d: string;

  value2_a: string;
  value2_b: string;
  value2_c: string;
  value2_d: string;

  value3_a: string;
  value3_b: string;
  value3_c: string;
  value3_d: string;

  constructor() {}

  ngOnInit() {
    const b = ['a', 'b', 'c', 'd'];

    of(b).subscribe(value => {
      let result = '[';
      b.forEach(element => {
        result += element + ',';
      });
      result += ']';

      this.value1 = result;
    });

    from(b)
      .pipe(
        map(value => {
          return value + 'x';
        })
      )
      .subscribe(value => {
        this.value1_a = value;
      });

    from(b)
      .pipe(
        concatMap(value => {
          return of(value + 'x');
        })
      )
      .subscribe(value => {
        this.value1_b = value.toString();
      });

    from(b)
      .pipe(
        mergeMap(value => {
          return of(value + 'x');
        })
      )
      .subscribe(value => {
        this.value1_c = value;
      });

    from(b)
      .pipe(
        switchMap(value => {
          return of(value + 'x');
        })
      )
      .subscribe(value => {
        this.value1_d = value.toString();
      });

    from(b)
      .pipe(
        map(value => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_a = value.toString();
      });

    from(b)
      .pipe(
        concatMap(value => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_b = value.toString();
      });

    from(b)
      .pipe(
        mergeMap(value => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_c = value.toString();
      });

    from(b)
      .pipe(
        switchMap(value => {
          return interval(1000);
        })
      )
      .subscribe(value => {
        this.value2_d = value.toString();
      });

    from(b)
      .pipe(
        map(value => {
          let rndN = Math.round(Math.random() * 10000);
          return of(value + 'x').pipe(delay(rndN));
        })
      )
      .subscribe(value => {
        this.value3_a = value.toString();
      });

    from(b)
      .pipe(
        concatMap(value => {
          let rndN = Math.round(Math.random() * 10000);
          return of(value + 'x').pipe(delay(rndN));
        })
      )
      .subscribe(value => {
        if (this.value3_b == undefined) {
          this.value3_b = '';
        }
        this.value3_b = this.value3_b + value.toString();
      });

    from(b)
      .pipe(
        mergeMap(value => {
          let rndN = Math.round(Math.random() * 10000);
          return of(value + 'x').pipe(delay(rndN));
        })
      )
      .subscribe(value => {
        if (this.value3_c == undefined) {
          this.value3_c = '';
        }
        this.value3_c = this.value3_c + value.toString();
      });

    from(b)
      .pipe(
        switchMap(value => {
          let rndN = Math.round(Math.random() * 10000);
          return of(value + 'x').pipe(delay(rndN));
        })
      )
      .subscribe(value => {
        if (this.value3_d == undefined) {
          this.value3_d = '';
        }
        this.value3_d = this.value3_d + value.toString();
      });
  }
}
