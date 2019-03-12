import matchers from 'jest-matchers/build/matchers';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { diffTestMessages } from './utils';

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

xdescribe('RXJS 6 testing operators - CUSTOM 2', () => {
  describe('SwitchMap', () => {
    describe('(multiple stages) var 1.', () => {
      it('should maps each value to inner observable and flattens', () => {
        const scheduler = new TestScheduler(assertDeepEqual);

        scheduler.run(helpers => {
          const { cold, expectObservable } = helpers;

          const obs1Values = {
            x: ['name1']
          };
          const obs1 = cold('-x--------|', obs1Values);

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
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b-------c-d|';

          const result = obs1.pipe(
            switchMap((ctx: Array<any>) => {
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
            switchMap((ctx: Array<any>) => {
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

    describe('(multiple stages) var 2.', () => {
      it('should maps each value to inner observable and flattens', () => {
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
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b--a-b-------c-d|';

          const result = obs1.pipe(
            switchMap((ctx: Array<any>) => {
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
            switchMap((ctx: Array<any>) => {
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

  describe('ConcatMap', () => {
    describe('(multiple stages) var 1.', () => {
      it('should maps each value to inner observable and flattens', () => {
        const scheduler = new TestScheduler(assertDeepEqual);

        scheduler.run(helpers => {
          const { cold, expectObservable } = helpers;

          const obs1Values = {
            x: ['name1']
          };
          const obs1 = cold('-x---x------------|', obs1Values);

          const obs2Values = {
            a: 'system',
            b: 'shared'
          };
          const obs2 = cold('a-b------------------|', obs2Values);

          const obs3Values = {
            a: 'customer1',
            b: 'customer2',
            c: 'ves-io'
          };
          const obs3 = cold('a-------b-c------|', obs3Values);

          const expectedValues = {
            a: ['name1', 'system', 'customer1'],
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b-------c-d|';

          const result = obs1.pipe(
            concatMap((ctx: Array<any>) => {
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
            concatMap((ctx: Array<any>) => {
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

    xdescribe('(multiple stages) var 2.', () => {
      it('should maps each value to inner observable and flattens', () => {
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
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b--a-b-------c-d|';

          const result = obs1.pipe(
            concatMap((ctx: Array<any>) => {
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
            concatMap((ctx: Array<any>) => {
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

  xdescribe('MergeMap', () => {
    describe('(multiple stages) var 1.', () => {
      it('should maps each value to inner observable and flattens', () => {
        const scheduler = new TestScheduler(assertDeepEqual);

        scheduler.run(helpers => {
          const { cold, expectObservable } = helpers;

          const obs1Values = {
            x: ['name1']
          };
          const obs1 = cold('-x--------|', obs1Values);

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
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b-------c-d|';

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

    describe('(multiple stages) var 2.', () => {
      it('should maps each value to inner observable and flattens', () => {
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
            b: ['name1', 'shared', 'customer1'],
            c: ['name1', 'shared', 'customer2'],
            d: ['name1', 'shared', 'ves-io']
          };
          const expected = '-a-b--a-b-------c-d|';

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
});
