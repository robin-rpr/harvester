import {Action} from '@ngrx/store';

export const CLEAR_HOME_SIDEBAR_STATE = '[HOME] Clear State';

export class ClearHomeSidebarState implements Action {
    readonly type = CLEAR_HOME_SIDEBAR_STATE;
}

export type HomeSidebarActions =
    | ClearHomeSidebarState;
