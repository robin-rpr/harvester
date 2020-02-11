import * as fromActions from '../../actions/modal/modal.actions';

export interface IModalState {
    loading: boolean;
    loaded: boolean;
}

export const initialState: IModalState = {
    loaded: true,
    loading: false,
};

export function reducer(state = initialState, action: any): IModalState {
    switch (action.type) {
        case fromActions.CLEAR_MODAL_STATE:
            return {...initialState};
        default:
            return state;
    }
}

export const getModalLoading = (state: IModalState) => state.loading;
export const getModalLoaded = (state: IModalState) => state.loaded;
