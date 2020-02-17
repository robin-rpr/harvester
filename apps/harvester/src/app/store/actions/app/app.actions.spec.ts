import * as fromActions from './app.actions';
import {TreeNodeFactory} from '../../../../../shared/tree-view/models/tree-node.model';
import {HttpErrorResponse} from '@angular/common/http';

describe('App Actions', () => {

    describe('CLEAR_APP_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearAppState();
            expect({...action}).toEqual({type: fromActions.CLEAR_APP_STATE});
        });
    });

    describe('SELECT_APP_NODE', () => {
        it('should create an action', () => {
            const payload = ['$$ROOT.HEAD'];
            const action = new fromActions.SelectAppNode(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_APP_NODE, payload});
        });
    });

    describe('LOAD_APP_NODES', () => {
        it('should create an action', () => {
            const action = new fromActions.LoadAppNodes();
            expect({...action}).toEqual({type: fromActions.SELECT_APP_NODE, payload});
        });
    });

    describe('LOAD_APP_NODES_FAIL', () => {
        it('should create an action', () => {
            const payload = new HttpErrorResponse({});
            const action = new fromActions.LoadAppNodesFail(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_APP_NODE, payload});
        });
    });

    describe('LOAD_APP_NODES_SUCCESS', () => {
        it('should create an action', () => {
            const payload = new TreeNodeFactory().mockResponse;
            const action = new fromActions.LoadAppNodesSuccess(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_APP_NODE, payload});
        });
    });


});
