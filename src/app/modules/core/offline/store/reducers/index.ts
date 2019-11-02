import * as fromReducer from './offline/offline.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IOfflineState {
  offline: fromReducer.IOfflineState;
}

export const reducers: ActionReducerMap<IOfflineState> = {
  offline: fromReducer.reducer,
};

export const getOfflineState = createFeatureSelector<IOfflineState>('OFFLINE_STATE');
