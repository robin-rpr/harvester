import * as fromReducer from './home/home.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IHomeState {
  home: fromReducer.IHomeState;
}

export const reducers: ActionReducerMap<IHomeState> = {
  home: fromReducer.reducer,
};

export const getHomeState = createFeatureSelector<IHomeState>('HOME_STATE');
