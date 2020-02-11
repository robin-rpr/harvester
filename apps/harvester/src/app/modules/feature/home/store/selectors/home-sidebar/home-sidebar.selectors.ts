import * as fromReducers from '../../reducers';
import {createSelector} from '@ngrx/store';

export const selectHomeSidebarState = createSelector(
    fromReducers.getHomeSidebarState,
    (state: fromReducers.IHomeSidebarState) => state.homeSidebar,
);

export const selectHomeSidebarLoading = createSelector(
    selectHomeSidebarState,
    fromReducers.getHomeSidebarState,
);

export const selectHomeSidebarLoaded = createSelector(
    selectHomeSidebarState,
    fromReducers.getHomeSidebarState,
);
