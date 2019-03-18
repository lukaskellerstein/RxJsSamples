import { concatMap, map, mapTo, mergeMap, switchMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

describe('RXJS 6 testing operators - BASICS', () => {
  describe('Map', () => {
    it('should add "1" to each value emitted', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const values = { a: 1, b: 2, c: 3, x: 2, y: 3, z: 4 };
        const source = cold('-a-b-c-|', values);
        const expected = '-x-y-z-|';
        // const expectedValues = { x: 2, y: 3, z: 4 };

        const result = source.pipe(map(x => Number(x) + 1));
        expectObservable(result).toBe(expected, values);
      });
    });
  });

  describe('MapTo', () => {
    it('should map every value emitted to "surprise!"', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const values = { a: 1, b: 2, c: 3, x: 'surprise!' };
        const source = cold('-a-b-c-|', values);
        const expected = '-x-x-x-|';

        const result = source.pipe(mapTo('surprise!'));
        expectObservable(result).toBe(expected, values);
      });
    });
  });

  describe('MergeMap', () => {
    it('should maps to inner observable and flattens', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const values = { a: 'hello', b: 'world', x: 'hello world' };
        const obs1 = cold('-a-------a--|', values);
        const obs2 = cold('-b-b-b-|', values);
        const expected = '--x-x-x---x-x-x-|';

        const result = obs1.pipe(
          mergeMap(x => obs2.pipe(map(y => x + ' ' + y)))
        );
        expectObservable(result).toBe(expected, values);
      });
    });
  });

  describe('SwitchMap', () => {
    it('should maps each value to inner observable and flattens', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const values = { a: 10, b: 30, x: 20, y: 40 };
        const obs1 = cold('-a-----a--b-|', values);
        const obs2 = cold('a-a-a|', values);
        const expected = '-x-x-x-x-xy-y-y|';

        const result = obs1.pipe(
          switchMap(x => obs2.pipe(map(y => Number(x) + Number(y))))
        );
        expectObservable(result).toBe(expected, values);
      });
    });
  });

  describe('ConcatMap', () => {
    it('should maps values to inner observable and emits in order', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;
        const values = { a: 10, b: 30, x: 20, y: 40 };
        const obs1 = cold('-a--------b------ab|', values);
        const obs2 = cold('a-a-a|', values);
        const expected = '-x-x-x----y-y-y--x-x-xy-y-y|';

        const result = obs1.pipe(
          concatMap(x => obs2.pipe(map(y => Number(x) + Number(y))))
        );
        expectObservable(result).toBe(expected, values);
      });
    });
  });
});
