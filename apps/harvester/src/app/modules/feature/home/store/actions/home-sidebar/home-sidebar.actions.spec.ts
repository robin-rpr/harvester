import * as fromActions from './home-sidebar.actions';
import {TreeNodeFactory} from '../../../../../shared/tree-view/models/tree-node.interface';

describe('Home Sidebar Actions', () => {

    describe('CLEAR_HOME_SIDEBAR_STATE', () => {
        it('should create an action', () => {
            const action = new fromActions.ClearHomeSidebarState();
            expect({...action}).toEqual({type: fromActions.CLEAR_HOME_SIDEBAR_STATE});
        });
    });

    describe('SELECT_HOME_SIDEBAR_NODE', () => {
        it('should create an action', () => {
            const payload = [new TreeNodeFactory().mockRequest];
            const action = new fromActions.SelectHomeSidebarNode(payload);
            expect({...action}).toEqual({type: fromActions.SELECT_HOME_SIDEBAR_NODE, payload});
        });
    });

});
