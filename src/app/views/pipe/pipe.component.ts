import { Component, OnInit } from '@angular/core';
import { Observable, pipe, range } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

const filterOutEvens = filter((x: number) => x % 2 === 0);
const sum = reduce((acc, next) => acc + next, 0);
const doubleBy = x => map((value: number) => value * x);

const complicatedLogic = pipe(
  filterOutEvens,
  doubleBy(2),
  sum
);

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  source$: Observable<number>;

  constructor() {}

  ngOnInit() {
    this.source$ = range(0, 10).pipe(complicatedLogic);
  }
}
