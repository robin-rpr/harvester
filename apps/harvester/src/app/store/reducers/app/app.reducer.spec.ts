import * as fromReducer from './app.reducer';
import {TreeNodeFactory} from "../../../../../shared/tree-view/models/tree-node.model";

describe('Home Sidebar Reducer', () => {
    describe('CLEAR_APP_STATE', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe(fromReducer.initialState);
        });
    });

    describe('SELECT_APP_NODE', () => {
        it('should update the state', () => {
            const action = { payload: '$$ROOT.HEAD'};
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe({treeNodes: action.payload})
        })
    });

    describe('LOAD_APP_NODES_SUCCESS', () => {
        it('should update the state', () => {
            const action = { payload: new TreeNodeFactory().mockResponse};
            const reduced = fromReducer.reducer(undefined, action);
            expect(reduced).toBe({treeNodes: action.payload})
        })
    })
});
