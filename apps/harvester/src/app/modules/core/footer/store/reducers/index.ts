import * as fromReducer from './footer/footer.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface IFooterState {
    modal: fromReducer.IFooterState;
}

export const reducers: ActionReducerMap<IFooterState> = {
    modal: fromReducer.reducer,
};

export const getFooterState = createFeatureSelector<IFooterState>('MODAL_STATE');
