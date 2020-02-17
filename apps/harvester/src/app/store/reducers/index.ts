import * as fromRouterReducer from '@ngrx/router-store';
import * as fromAppReducer from '../reducers/app/app.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {Params} from '@angular/router';

export interface IAppState {
    app: fromAppReducer.IAppState;
}

export interface IAppRouterState {
    appRouter: fromRouterReducer.RouterReducerState<RouterStateUrl>
}

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export const routerReducer: ActionReducerMap<IAppRouterState> = {
    appRouter: fromRouterReducer.routerReducer,
};

export const appReducer: ActionReducerMap<IAppState> = {
    app: fromAppReducer.reducer,
};

export const getAppRouterState = createFeatureSelector<fromRouterReducer.RouterReducerState<RouterStateUrl>>('ROUTER');
export const getAppState = createFeatureSelector<IAppState>('APP_STATE');
