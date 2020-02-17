import * as fromActions from './home-sidebar.actions';
import {TreeNodeFactory} from '../../../../../shared/tree-view/models/tree-node.model';
import {HttpErrorResponse} from '@angular/common/http';

describe('Home Sidebar Actions', () => {

    describe('CLEAR_HOME_SIDEBAR_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearHomeSidebarState();
            expect({...action}).toEqual({type: fromActions.CLEAR_HOME_SIDEBAR_STATE});
        });
    });

    describe('SELECT_HOME_SIDEBAR_NODE', () => {
        it('should create an action', () => {
            const payload = ['$$ROOT.HEAD'];
            const action = new fromActions.SelectHomeSidebarNode(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_HOME_SIDEBAR_NODE, payload});
        });
    });

    describe('LOAD_HOME_SIDEBAR_NODES', () => {
        it('should create an action', () => {
            const action = new fromActions.LoadHomeSidebarNodes();
            expect({...action}).toEqual({type: fromActions.SELECT_HOME_SIDEBAR_NODE, payload});
        });
    });

    describe('LOAD_HOME_SIDEBAR_NODES_FAIL', () => {
        it('should create an action', () => {
            const payload = new HttpErrorResponse({});
            const action = new fromActions.LoadHomeSidebarNodesFail(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_HOME_SIDEBAR_NODE, payload});
        });
    });

    describe('LOAD_HOME_SIDEBAR_NODES_SUCCESS', () => {
        it('should create an action', () => {
            const payload = new TreeNodeFactory().mockResponse;
            const action = new fromActions.LoadHomeSidebarNodesSuccess(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_HOME_SIDEBAR_NODE, payload});
        });
    });


});
