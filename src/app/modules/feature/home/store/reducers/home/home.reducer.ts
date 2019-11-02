import * as fromActions from '../../actions/home/home.actions';

export interface IHomeState {
  loading: boolean;
  loaded: boolean;
}

export const initialState: IHomeState = {
  loaded: true,
  loading: false,
};

export function reducer(state = initialState, action: any): IHomeState {
  switch (action.type) {
    case fromActions.CLEAR_HOME_STATE:
      return { ...initialState };
    default:
      return state;
  }
}

export const getHomeLoading = (state: IHomeState) => state.loading;
export const getHomeLoaded = (state: IHomeState) => state.loaded;
