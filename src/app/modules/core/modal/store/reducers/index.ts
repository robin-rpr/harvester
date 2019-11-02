import * as fromReducer from './modal/modal.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IModalState {
  modal: fromReducer.IModalState;
}

export const reducers: ActionReducerMap<IModalState> = {
  modal: fromReducer.reducer,
};

export const getModalState = createFeatureSelector<IModalState>('MODAL_STATE');
