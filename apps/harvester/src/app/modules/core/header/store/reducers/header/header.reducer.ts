import * as fromActions from '../../actions/header/header.actions';

export interface IHeaderState {
    loading: boolean;
    loaded: boolean;
}

export const initialState: IHeaderState = {
    loaded: true,
    loading: false,
};

export function reducer(state = initialState, action: any): IHeaderState {
    switch (action.type) {
        case fromActions.CLEAR_HEADER_STATE:
            return {...initialState};
        default:
            return state;
    }
}

export const getHeaderLoading = (state: IHeaderState) => state.loading;
export const getHeaderLoaded = (state: IHeaderState) => state.loaded;
