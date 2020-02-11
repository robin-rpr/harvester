import {Action} from '@ngrx/store';

export const CLEAR_HOME_STATE = '[HOME] Clear State';

export class ClearHomeState implements Action {
    readonly type = CLEAR_HOME_STATE;
}

export type HomeActions =
    | ClearHomeState;
