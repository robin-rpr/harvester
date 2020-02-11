import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectOfflineState = createSelector(
    fromReducers.getOfflineState,
    (state: fromReducers.IOfflineState) => state.offline,
);

export const selectOfflineLoading = createSelector(
    selectOfflineState,
    fromReducers.getOfflineState,
);

export const selectOfflineLoaded = createSelector(
    selectOfflineState,
    fromReducers.getOfflineState,
);
