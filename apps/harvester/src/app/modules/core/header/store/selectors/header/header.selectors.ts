import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectHeaderState = createSelector(
    fromReducers.getHeaderState,
    (state: fromReducers.IHeaderState) => state.modal,
);

export const selectHeaderLoading = createSelector(
    selectHeaderState,
    fromReducers.getHeaderState,
);

export const selectHeaderLoaded = createSelector(
    selectHeaderState,
    fromReducers.getHeaderState,
);
