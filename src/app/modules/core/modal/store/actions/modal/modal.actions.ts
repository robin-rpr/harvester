import { Action } from '@ngrx/store';

export const CLEAR_MODAL_STATE = '[MODAL] Clear State';

export class ClearModalState implements Action {
  readonly type = CLEAR_MODAL_STATE;
}

export type ModalActions =
    | ClearModalState;
