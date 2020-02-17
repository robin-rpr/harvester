import * as fromActions from '../../actions/footer/footer.actions';

export interface IFooterState {
    loading: boolean;
    loaded: boolean;
}

export const initialState: IFooterState = {
    loaded: true,
    loading: false,
};

export function reducer(state = initialState, action: any): IFooterState {
    switch (action.type) {
        case fromActions.CLEAR_FOOTER_STATE:
            return {...initialState};
        default:
            return state;
    }
}

export const getFooterLoading = (state: IFooterState) => state.loading;
export const getFooterLoaded = (state: IFooterState) => state.loaded;
