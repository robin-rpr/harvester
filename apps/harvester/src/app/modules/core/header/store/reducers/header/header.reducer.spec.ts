import * as fromReducer from './header.reducer';

describe('Header Reducer', () => {
    describe('initial state', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe(fromReducer.initialState);
        });
    });
});
