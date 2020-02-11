import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectModalState = createSelector(
    fromReducers.getModalState,
    (state: fromReducers.IModalState) => state.modal,
);

export const selectModalLoading = createSelector(
    selectModalState,
    fromReducers.getModalState,
);

export const selectModalLoaded = createSelector(
    selectModalState,
    fromReducers.getModalState,
);
