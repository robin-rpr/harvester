import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectFlagsState = createSelector(
    fromReducers.getFlagsState,
    (state: fromReducers.IFlagsState) => state.flags,
);

export const selectFlagsLoading = createSelector(
    selectFlagsState,
    fromReducers.getFlagsState,
);

export const selectFlagsLoaded = createSelector(
    selectFlagsState,
    fromReducers.getFlagsState,
);
