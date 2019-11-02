import * as fromReducer from './offline.reducer';

describe('Offline Reducer', () => {
  describe('initial state', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const reduced = fromReducer.reducer(undefined, action);
      expect(reduced).toBe(fromReducer.initialState);
    });
  });
});
