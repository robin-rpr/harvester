import * as fromReducer from './header/header.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface IHeaderState {
    modal: fromReducer.IHeaderState;
}

export const reducers: ActionReducerMap<IHeaderState> = {
    modal: fromReducer.reducer,
};

export const getHeaderState = createFeatureSelector<IHeaderState>('MODAL_STATE');
