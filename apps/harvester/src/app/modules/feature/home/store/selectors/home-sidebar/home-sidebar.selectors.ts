import * as fromReducers from '../../reducers';
import * as fromHomeSidebarReducer from '../../reducers/home-sidebar/home-sidebar.reducer';

import {createSelector} from '@ngrx/store';

export const selectHomeSidebarState = createSelector(
    fromReducers.getHomeSidebarState,
    (state: fromReducers.IHomeSidebarState) => state.homeSidebar,
);

export const selectHomeSidebarLoading = createSelector(
    selectHomeSidebarState,
    fromHomeSidebarReducer.getHomeSidebarLoading,
);

export const selectHomeSidebarLoaded = createSelector(
    selectHomeSidebarState,
    fromHomeSidebarReducer.getHomeSidebarLoaded,
);
