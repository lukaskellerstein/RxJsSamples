import matchers from 'jest-matchers/build/matchers';
import { map, mergeMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { diffTestMessages } from '../utils';

/**
 * Simple Matcher which uses Jest nice diffs messages. Original `.toEqual` is not
 * suitable because we'll pass it to TestScheduler and it must throw on error.
 */
function assertDeepEqual(actual, expected) {
  const result = matchers.toEqual(actual, expected);

  if (!result.pass) {
    const diff = diffTestMessages(result.actual, result.expected);
    throw diff + '\n' + result.message();
  }
}

describe('MergeMap', () => {
  describe('OVMD - one stage', () => {
    it('should ends in expected way', () => {
      const scheduler = new TestScheduler(assertDeepEqual);

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const values = { a: 10, b: 30, x: 20, y: 40 };
        const obs1 = cold('-a--------a--b-|', values);
        const obs2 = cold('a-a-a|', values);
        const expected = '-x-x-x----x-xyxy-y|';

        const result = obs1.pipe(
          mergeMap(x => obs2.pipe(map(y => Number(x) + Number(y))))
        );
        expectObservable(result).toBe(expected, values);
      });
    });
  });

  xdescribe('23FE - two stages - var 1.', () => {
    it('should ends in expected way', () => {
      const scheduler = new TestScheduler(assertDeepEqual);

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const obs1Values = {
          a: ['name1']
        };
        const obs1 = cold('-a--------|', obs1Values);

        const obs2Values = {
          a: 'system',
          b: 'shared'
        };
        const obs2 = cold('a-b|', obs2Values);

        const obs3Values = {
          a: 'customer1',
          b: 'customer2',
          c: 'ves-io'
        };
        const obs3 = cold('a-------b-c|', obs3Values);

        const expectedValues = {
          a: ['name1', 'system', 'customer1'],
          b: ['name1', 'system', 'customer2'],
          c: ['name1', 'system', 'ves-io'],
          d: ['name1', 'shared', 'customer1'],
          e: ['name1', 'shared', 'customer2'],
          f: ['name1', 'shared', 'ves-io']
        };
        const expected = '-a-d-----b-(ce)-f|';

        const result = obs1.pipe(
          mergeMap((ctx: Array<any>) => {
            return obs2.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // ---------------------------------------------
                let aa = [...ctx];
                aa[1] = item;
                return aa;
              })
            );
          }),
          mergeMap((ctx: Array<any>) => {
            return obs3.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // ---------------------------------------------
                let aa = [...ctx];
                aa[2] = item;
                return aa;
              })
            );
          }),
          map(data => {
            return data;
          })
        );

        expectObservable(result).toBe(expected, expectedValues);
      });
    });
  });

  xdescribe('CSW0 - two stages - var 2.', () => {
    it('should ends in expected way', () => {
      const scheduler = new TestScheduler(assertDeepEqual);

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const obs1Values = {
          x: ['name1']
        };
        const obs1 = cold('-x----x---|', obs1Values);

        const obs2Values = {
          a: 'system',
          b: 'shared'
        };
        const obs2 = cold('a-b|', obs2Values);

        const obs3Values = {
          a: 'customer1',
          b: 'customer2',
          c: 'ves-io'
        };
        const obs3 = cold('a-------b-c|', obs3Values);

        const expectedValues = {
          a: ['name1', 'system', 'customer1'],
          b: ['name1', 'system', 'customer2'],
          c: ['name1', 'system', 'ves-io'],
          d: ['name1', 'shared', 'customer1'],
          e: ['name1', 'shared', 'customer2'],
          f: ['name1', 'shared', 'ves-io']
        };
        const expected = '-a-d--a-db-(ce)-fb-(ce)-f|';

        const result = obs1.pipe(
          mergeMap((ctx: Array<any>) => {
            return obs2.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // ---------------------------------------------
                let aa = [...ctx];
                aa[1] = item;
                return aa;
              })
            );
          }),
          mergeMap((ctx: Array<any>) => {
            return obs3.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // ---------------------------------------------
                let aa = [...ctx];
                aa[2] = item;
                return aa;
              })
            );
          }),
          map(data => {
            return data;
          })
        );

        expectObservable(result).toBe(expected, expectedValues);
      });
    });
  });
});
