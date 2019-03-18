import matchers from 'jest-matchers/build/matchers';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

import { diffTestMessages } from '../../utils';

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

describe('One Stage - with recreating context', () => {
  describe('SwitchMap', () => {
    it('should return expected result', () => {
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

        const expectedValues = {
          a: ['name1', 'system'],
          b: ['name1', 'shared']
        };
        const expected = '-a-b------|';

        const result = obs1.pipe(
          switchMap((ctx: Array<any>) => {
            return obs2.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // OTHERWISE RESULT OF TEST WILL BE:
                // -name1,system-name1,shared------| (Expected)
                // -name1,shared-name1,shared------| (Received)
                // ---------------------------------------------
                let aa = [...ctx];
                aa[1] = item;
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

  describe('SwitchMap (primitive context)', () => {
    it('should return expected result', () => {
      const scheduler = new TestScheduler(assertDeepEqual);

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const obs1Values = {
          x: 'name1'
        };
        const obs1 = cold('-x--------|', obs1Values);

        const obs2Values = {
          a: 'system',
          b: 'shared'
        };
        const obs2 = cold('a-b|', obs2Values);

        const expectedValues = {
          a: 'name1-system',
          b: 'name1-shared'
        };
        const expected = '-a-b------|';

        const result = obs1.pipe(
          switchMap((ctx: string) => {
            return obs2.pipe(
              map((item: string) => {
                let aaa = `${ctx}-${item}`;
                return aaa;
              })
            );
          })
        );

        expectObservable(result).toBe(expected, expectedValues);
      });
    });
  });

  describe('ConcatMap', () => {
    it('should return expected result', () => {
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

        const expectedValues = {
          a: ['name1', 'system'],
          b: ['name1', 'shared']
        };
        const expected = '-a-b------|';

        const result = obs1.pipe(
          concatMap((ctx: Array<any>) => {
            return obs2.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // OTHERWISE RESULT OF TEST WILL BE:
                // -name1,system-name1,shared------| (Expected)
                // -name1,shared-name1,shared------| (Received)
                // ---------------------------------------------
                let aa = [...ctx];
                aa[1] = item;
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

  describe('MergeMap', () => {
    it('should return expected result', () => {
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

        const expectedValues = {
          a: ['name1', 'system'],
          b: ['name1', 'shared']
        };
        const expected = '-a-b------|';

        const result = obs1.pipe(
          mergeMap((ctx: Array<any>) => {
            return obs2.pipe(
              map((item: string) => {
                // ---------------------------------------------
                // IT IS NECESSARY TO CREATE A NEW OBJECT !!!!!
                // IN EACH PIPE SECTION
                // OTHERWISE RESULT OF TEST WILL BE:
                // -name1,system-name1,shared------| (Expected)
                // -name1,shared-name1,shared------| (Received)
                // ---------------------------------------------
                let aa = [...ctx];
                aa[1] = item;
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
