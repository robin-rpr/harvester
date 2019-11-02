import * as fromActions from '../../actions/offline/offline.actions';

export interface IOfflineState {
  loading: boolean;
  loaded: boolean;
}

export const initialState: IOfflineState = {
  loaded: true,
  loading: false,
};

export function reducer(state = initialState, action: any): IOfflineState {
  switch (action.type) {
    case fromActions.CLEAR_OFFLINE_STATE:
      return { ...initialState };
    default:
      return state;
  }
}

export const getOfflineLoading = (state: IOfflineState) => state.loading;
export const getOfflineLoaded = (state: IOfflineState) => state.loaded;
