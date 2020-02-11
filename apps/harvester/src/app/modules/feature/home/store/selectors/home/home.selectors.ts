import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectHomeState = createSelector(
    fromReducers.getHomeState,
    (state: fromReducers.IHomeState) => state.home,
);

export const selectHomeLoading = createSelector(
    selectHomeState,
    fromReducers.getHomeState,
);

export const selectHomeLoaded = createSelector(
    selectHomeState,
    fromReducers.getHomeState,
);
