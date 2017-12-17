import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-createread',
  templateUrl: './createread.component.html',
  styleUrls: ['./createread.component.scss']
})
export class CreatereadComponent implements OnInit {

  
  value1$: Observable<string>;
  value2$: Observable<string>;
  value3$: Observable<string>;
  value4$: Observable<string>;
  value5$: Observable<string>;

  value1_subscribe: string;
  value2_subscribe: string;
  value3_subscribe: string;
  value4_subscribe: string;
  value5_subscribe: string;


  constructor() { }


  ngOnInit(): void {


    /* ****************************************************** */
    /* CREATIONAL operators */
    /* ****************************************************** */

    this.value1$ = Observable.interval(1000).map((value) => {
      return value.toString()
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
    /* Utility operators */
    /* ****************************************************** */


    /************ SUBSCRIBE ***************************/
    this.value1$.subscribe((value) => {
      this.value1_subscribe = value;
    });

    this.value2$.subscribe((value) => {
      this.value2_subscribe = value;
    });

    this.value3$.subscribe((value) => {
      this.value3_subscribe = value;
    });

    this.value4$.subscribe((value) => {
      this.value4_subscribe = value;
    });
    this.value5$.subscribe((value) => {
      this.value5_subscribe = value;
    });

    /************ DO ***************************/
    this.value1$
      .do((value) => {
        console.log(value);
        value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
      })
      .subscribe((value) => {
        // do nothing
      });

    this.value2$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
    .subscribe((value) => {
      // do nothing
    });

    this.value3$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
    .subscribe((value) => {
      // do nothing
    });

    this.value4$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
    .subscribe((value) => {
      // do nothing
    });

    this.value5$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
    .subscribe((value) => {
      // do nothing
    });



  }

}
