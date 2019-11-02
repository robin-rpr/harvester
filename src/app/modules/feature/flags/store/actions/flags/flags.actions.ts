import { Action } from '@ngrx/store';

export const CLEAR_FLAGS_STATE = '[FLAGS] Clear State';

export class ClearFlagsState implements Action {
  readonly type = CLEAR_FLAGS_STATE;
}

export type FlagsActions =
    | ClearFlagsState;
