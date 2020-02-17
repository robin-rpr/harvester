import * as fromActions from './footer.actions';

describe('Footer Actions', () => {

    describe('CLEAR_FOOTER_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearFooterState();
            expect({...action}).toEqual({type: fromActions.CLEAR_FOOTER_STATE});
        });
    });

});
