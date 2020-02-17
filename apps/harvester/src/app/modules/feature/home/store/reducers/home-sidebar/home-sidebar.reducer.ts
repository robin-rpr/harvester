import * as fromActions from '../../actions/home-sidebar/home-sidebar.actions';
import {ITreeNode} from '../../../../../shared/tree-view/models/tree-node.model';

export interface IHomeSidebarState {
    loading: boolean;
    loaded: boolean;
}

export const initialState: IHomeSidebarState = {
    loaded: true,
    loading: false,
};

export function reducer(state = initialState, action: any): IHomeSidebarState {
    switch (action.type) {
        case fromActions.CLEAR_HOME_SIDEBAR_STATE:
            return {...initialState};
        default:
            return state;
    }
}

function setLoadingTrueLoadedFalse(state: IHomeSidebarState): IHomeSidebarState {
    return { ...state, loading: true, loaded: false };
}

function setLoadingFalseLoadedFalse(state: IHomeSidebarState): IHomeSidebarState {
    return { ...state, loading: false, loaded: false };
}

function setLoadingFalseLoadedTrue(state: IHomeSidebarState): IHomeSidebarState {
    return { ...state, loading: false, loaded: true };
}

export const getHomeSidebarState = (state: IHomeSidebarState) => state;
export const getHomeSidebarLoading = (state: IHomeSidebarState) => state.loading;
export const getHomeSidebarLoaded = (state: IHomeSidebarState) => state.loaded;

