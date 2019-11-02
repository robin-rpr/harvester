import { Action } from '@ngrx/store';

export const CLEAR_OFFLINE_STATE = '[OFFLINE] Clear State';

export class ClearOfflineState implements Action {
  readonly type = CLEAR_OFFLINE_STATE;
}

export type OfflineActions =
    | ClearOfflineState;
