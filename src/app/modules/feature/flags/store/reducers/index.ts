import * as fromReducer from './flags/flags.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IFlagsState {
  flags: fromReducer.IFlagsState;
}

export const reducers: ActionReducerMap<IFlagsState> = {
  flags: fromReducer.reducer,
};

export const getFlagsState = createFeatureSelector<IFlagsState>('FLAGS_STATE');
