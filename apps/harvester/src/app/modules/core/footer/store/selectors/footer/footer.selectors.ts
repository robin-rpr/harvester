import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectFooterState = createSelector(
    fromReducers.getFooterState,
    (state: fromReducers.IFooterState) => state.modal,
);

export const selectFooterLoading = createSelector(
    selectFooterState,
    fromReducers.getFooterState,
);

export const selectFooterLoaded = createSelector(
    selectFooterState,
    fromReducers.getFooterState,
);
