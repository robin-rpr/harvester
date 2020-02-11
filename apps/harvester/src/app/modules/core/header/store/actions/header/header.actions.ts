import {Action} from '@ngrx/store';

export const CLEAR_HEADER_STATE = '[HEADER] Clear State';

export class ClearHeaderState implements Action {
    readonly type = CLEAR_HEADER_STATE;
}

export type HeaderActions =
    | ClearHeaderState;
