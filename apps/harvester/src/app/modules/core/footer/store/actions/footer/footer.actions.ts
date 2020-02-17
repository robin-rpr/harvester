import {Action} from '@ngrx/store';

export const CLEAR_FOOTER_STATE = '[FOOTER] Clear State';

export class ClearFooterState implements Action {
    readonly type = CLEAR_FOOTER_STATE;
}

export type FooterActions =
    | ClearFooterState;
