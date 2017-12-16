import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


//others
declare var jQuery: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';


  value1$: Observable<string>;
  value2$: Observable<string>;
  value3$: Observable<string>;
  value4$: Observable<string>;

  value1_subscribe: string;
  value2_subscribe: string;
  value3_subscribe: string;
  value4_subscribe: string;

  value1_do: string;
  value2_do: string;
  value3_do: string;
  value4_do: string;

  value1_map: string;
  value2_map: string;
  value3_map: string;
  value4_map: string;

  value1_mapto: string;
  value2_mapto: string;
  value3_mapto: string;
  value4_mapto: string;

  constructor() {


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

    /************ DO ***************************/
    this.value1$
      .do((value) => {
        console.log(value);
        value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
      })
      .subscribe((value) => {
        this.value1_do = value;
      });

    this.value2$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
      .subscribe((value) => {
        this.value2_do = value;
      });

    this.value3$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
      .subscribe((value) => {
        this.value3_do = value;
      });

    this.value4$.do((value) => {
      console.log(value);
      value = value + "AAA"; //'DO' operator, doesn't change the value !!!!!!
    })
      .subscribe((value) => {
        this.value4_do = value;
      });



  }


  ngOnInit(): void {


    /* ****************************************************** */
    /* TRANSFORMATION operators */
    /* ****************************************************** */


    /************ MAP ***************************/
    this.value1$
      .map((value) => {
        return value = value + "AAA";
      })
      .subscribe((value) => {
        this.value1_map = value
      });

    this.value2$
      .map((value) => {
        return value = value + "AAA";
      })
      .subscribe((value) => {
        this.value2_map = value
      });

    this.value3$
      .map((value) => {
        return value = value + "AAA";
      })
      .subscribe((value) => {
        this.value3_map = value
      });

    this.value4$
      .map((value) => {
        return value = value + "AAA";
      })
      .subscribe((value) => {
        this.value4_map = value
      });


    /************ MAP TO ***************************/
    this.value1$
    .mapTo("HELLO")
    .subscribe((value) => {
      this.value1_mapto = value
    });

    this.value2$
    .mapTo("HELLO")
    .subscribe((value) => {
      this.value2_mapto = value
    });

    this.value3$
    .mapTo("HELLO")
    .subscribe((value) => {
      this.value3_mapto = value
    });

    this.value4$
    .mapTo("HELLO")
    .subscribe((value) => {
      this.value4_mapto = value
    });
  }

}
