import * as fromActions from '../../actions/flags/flags.actions';

export interface IFlagsState {
    loading: boolean;
    loaded: boolean;
}

export const initialState: IFlagsState = {
    loaded: true,
    loading: false,
};

export function reducer(state = initialState, action: any): IFlagsState {
    switch (action.type) {
        case fromActions.CLEAR_FLAGS_STATE:
            return {...initialState};
        default:
            return state;
    }
}

export const getFlagsLoading = (state: IFlagsState) => state.loading;
export const getFlagsLoaded = (state: IFlagsState) => state.loaded;
