import * as fromActions from './header.actions';

describe('Header Actions', () => {

    describe('CLEAR_HEADER_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearHeaderState();
            expect({...action}).toEqual({type: fromActions.CLEAR_HEADER_STATE});
        });
    });

});
