import * as fromReducer from './footer.reducer';

describe('Footer Reducer', () => {
    describe('initial state', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe(fromReducer.initialState);
        });
    });
});
