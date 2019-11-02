import * as fromReducer from './home.reducer';

describe('Home Reducer', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const reduced = fromReducer.reducer(undefined, action);
      expect(reduced).toBe(fromReducer.initialState);
    });
  });
});
