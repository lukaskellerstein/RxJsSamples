import { concatMap, map, switchMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

fdescribe('RXJS 6 testing operators - CUSTOM 1', () => {
  describe('SwitchMap', () => {
    it('should maps each value to inner observable and flattens', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const obs1Values = {
          x: ['name1', 'some text for name1']
        };
        const obs1 = cold('-x--------|', obs1Values);

        const obs2Values = {
          a: 'system',
          b: 'shared'
        };
        const obs2 = cold('a-b|', obs2Values);

        const expectedValues = {
          a: ['name1', 'some text for name1', 'system'],
          b: ['name1', 'some text for name1', 'shared']
        };
        const expected = '-b-b------|';

        const result = obs1.pipe(
          switchMap((ctx: Array<any>) => {
            // const _name = ctx[0];
            // const _text = ctx[1];

            console.log('switchMap1 - ctx:', ctx);

            return obs2.pipe(
              map((item: string) => {
                console.log('switchMap1 - obs2 - ctx1:', ctx);

                ctx[2] = item;

                console.log('switchMap1 - obs2 - ctx2:', ctx);
                return ctx;
              })
            );
          })
          // switchMap((ctx: Array<any>) => {
          // 	// const _name = ctx[0];
          // 	// const _text = ctx[1];
          // 	// const _item = ctx[2];

          // 	console.log('switchMap2 - ctx:', ctx);

          // 	return of(ctx);
          // })
        );

        expectObservable(result).toBe(expected, expectedValues);
      });
    });
  });

  describe('ConcatMap', () => {
    it('should maps each value to inner observable and flattens', () => {
      const scheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      scheduler.run(helpers => {
        const { cold, expectObservable } = helpers;

        const obs1Values = {
          x: ['name1', 'some text for name1']
        };
        const obs1 = cold('-x--------|', obs1Values);

        const obs2Values = {
          a: 'system',
          b: 'shared'
        };
        const obs2 = cold('a-b|', obs2Values);

        const expectedValues = {
          a: ['name1', 'some text for name1', 'system'],
          b: ['name1', 'some text for name1', 'shared']
        };
        const expected = '-b-b------|';

        const result = obs1.pipe(
          concatMap((ctx: Array<any>) => {
            // const _name = ctx[0];
            // const _text = ctx[1];

            console.log('switchMap1 - ctx:', ctx);

            return obs2.pipe(
              map((item: string) => {
                ctx[2] = item;

                console.log('switchMap1 - obs2 - ctx:', ctx);
                return ctx;
              })
            );
          })
          // switchMap((ctx: Array<any>) => {
          // 	// const _name = ctx[0];
          // 	// const _text = ctx[1];
          // 	// const _item = ctx[2];

          // 	console.log('switchMap2 - ctx:', ctx);

          // 	return of(ctx);
          // })
        );

        expectObservable(result).toBe(expected, expectedValues);
      });
    });
  });
});
