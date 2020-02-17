import * as fromReducer from './home-sidebar.reducer';
import {TreeNodeFactory} from "../../../../../shared/tree-view/models/tree-node.model";

describe('Home Sidebar Reducer', () => {
    describe('CLEAR_HOME_SIDEBAR_STATE', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe(fromReducer.initialState);
        });
    });
});
