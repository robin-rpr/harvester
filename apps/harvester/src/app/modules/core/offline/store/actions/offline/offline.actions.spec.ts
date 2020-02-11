import * as fromActions from './offline.actions';

describe('Offline Actions', () => {

    describe('CLEAR_OFFLINE_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearOfflineState();
            expect({...action}).toEqual({type: fromActions.CLEAR_OFFLINE_STATE});
        });
    });

});
