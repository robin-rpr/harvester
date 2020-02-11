import * as fromActions from '../../actions/home-sidebar/home-sidebar.actions';
import {ITreeNode} from '../../../../../shared/tree-view/models/tree-node.interface';

export interface IHomeSidebarState {
    loading: boolean;
    loaded: boolean;
    treeNodes: ITreeNode[];
    selectedTreeNodes: ITreeNode[];
}

export const initialState: IHomeSidebarState = {
    loaded: true,
    loading: false,
    treeNodes: [],
    selectedTreeNodes: []
};

export function reducer(state = initialState, action: any): IHomeSidebarState {
    switch (action.type) {
        case fromActions.CLEAR_HOME_SIDEBAR_STATE:
            return {...initialState};
        case fromActions.SELECT_HOME_SIDEBAR_NODE:
            return handleSelectHomeSidebarNode(state, action.payload);
        default:
            return state;
    }
}

function handleSelectHomeSidebarNode(state, payload: ITreeNode[]) {
    return {...state, selectedTreeNodes: payload};
}

export const getHomeSidebarLoading = (state: IHomeSidebarState) => state.loading;
export const getHomeSidebarLoaded = (state: IHomeSidebarState) => state.loaded;
export const getHomeSidebarSelectedNode = (state: IHomeSidebarState) => state.selectedTreeNodes;
