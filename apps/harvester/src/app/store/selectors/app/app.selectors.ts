import * as fromReducers from '../../reducers';
import * as fromAppReducer from '../../reducers/app/app.reducer';

import {createSelector} from '@ngrx/store';

export const selectAppState = createSelector(
    fromReducers.getAppState,
    (state: fromReducers.IAppState) => state.app,
);

export const selectAppLoading = createSelector(
    selectAppState,
    fromAppReducer.getAppLoading,
);

export const selectAppLoaded = createSelector(
    selectAppState,
    fromAppReducer.getAppLoaded,
);

export const selectAppNodes = createSelector(
    selectAppState,
    fromAppReducer.getAppNodes
);

export const selectAppSelectedNodes = createSelector(
    selectAppState,
    fromAppReducer.getAppSelectedNodes
);
