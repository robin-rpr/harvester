import * as fromHomeReducer from './home/home.reducer';
import * as fromHomeSidebarReducer from './home-sidebar/home-sidebar.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface IHomeState {
    home: fromHomeReducer.IHomeState;
}

export interface IHomeSidebarState {
    homeSidebar: fromHomeSidebarReducer.IHomeSidebarState;
}

export const homeReducers: ActionReducerMap<IHomeState> = {
    home: fromHomeReducer.reducer,
};

export const homeSidebarReducers: ActionReducerMap<IHomeSidebarState> = {
    homeSidebar: fromHomeSidebarReducer.reducer
};

export const getHomeState = createFeatureSelector<IHomeState>('HOME_STATE');
export const getHomeSidebarState = createFeatureSelector<IHomeSidebarState>('HOME_SIDEBAR_STATE');
