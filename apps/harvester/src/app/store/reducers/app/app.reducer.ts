import * as fromActions from '../../actions/app/app.actions';
import {ITreeNode} from '../../../modules/shared/tree-view/models/tree-node.model';

export interface IAppState {
    loading: boolean;
    loaded: boolean;
    treeNodes: ITreeNode[];
    selectedTreeNodes: string[];
}

export const initialState: IAppState = {
    loaded: true,
    loading: false,
    treeNodes: [],
    selectedTreeNodes: []
};

export function reducer(state = initialState, action: any): IAppState {
    switch (action.type) {
        case fromActions.CLEAR_APP_STATE:
            return {...initialState};

        case fromActions.SELECT_APP_NODE:
            return handleSelectAppNode(state, action.payload);

        case fromActions.LOAD_APP_NODES:
            return setLoadingTrueLoadedFalse(state);
        case fromActions.LOAD_APP_NODES_FAIL:
            return setLoadingFalseLoadedFalse(state);
        case fromActions.LOAD_APP_NODES_SUCCESS:
            return handleLoadAppNodes(state, action.payload);

        default:
            return state;
    }
}

function setLoadingTrueLoadedFalse(state: IAppState): IAppState {
    return { ...state, loading: true, loaded: false };
}

function setLoadingFalseLoadedFalse(state: IAppState): IAppState {
    return { ...state, loading: false, loaded: false };
}

function setLoadingFalseLoadedTrue(state: IAppState): IAppState {
    return { ...state, loading: false, loaded: true };
}

function handleLoadAppNodes(state: IAppState, payload: ITreeNode) {
    return {...state, treeNodes: [payload], loading: false, loaded: true}
}

function handleSelectAppNode(state: IAppState, payload: string[]) {
    return {...state, selectedTreeNodes: payload};
}

export const getAppState = (state: IAppState) => state;
export const getAppLoading = (state: IAppState) => state.loading;
export const getAppLoaded = (state: IAppState) => state.loaded;
export const getAppSelectedNodes = (state: IAppState) => state.selectedTreeNodes;
export const getAppNodes = (state: IAppState) => state.treeNodes;

