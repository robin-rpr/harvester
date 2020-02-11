import * as fromActions from './flags.actions';

describe('Flags Actions', () => {

    describe('CLEAR_FLAGS_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearFlagsState();
            expect({...action}).toEqual({type: fromActions.CLEAR_FLAGS_STATE});
        });
    });

});
