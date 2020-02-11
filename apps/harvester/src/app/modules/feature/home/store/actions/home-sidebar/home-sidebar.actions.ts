import {Action} from '@ngrx/store';
import {ITreeNode} from '../../../../../shared/tree-view/models/tree-node.interface';

export const CLEAR_HOME_SIDEBAR_STATE = '[HOME] Clear State';

export const SELECT_HOME_SIDEBAR_NODE = '[HOME-SIDEBAR] Select Sidebar Node';
export const SELECT_HOME_SIDEBAR_NODE_FAIL = '[HOME-SIDEBAR] Select Sidebar Node Fail';
export const SELECT_HOME_SIDEBAR_NODE_SUCCESS = '[HOME-SIDEBAR] Select Sidebar Node Success';

export class ClearHomeSidebarState implements Action {
    readonly type = CLEAR_HOME_SIDEBAR_STATE;
}

export class SelectHomeSidebarNode implements Action {
    readonly type = SELECT_HOME_SIDEBAR_NODE;

    constructor(public payload: ITreeNode[]) {
    }
}

export class SelectHomeSidebarNodeFail implements Action {
    readonly type = SELECT_HOME_SIDEBAR_NODE_FAIL;

    constructor(public payload: unknown) {
    }
}

export class SelectHomeSidebarNodeSuccess implements Action {
    readonly type = SELECT_HOME_SIDEBAR_NODE_SUCCESS;

    constructor(public payload: ITreeNode) {
    }
}

export type HomeSidebarActions =
    | ClearHomeSidebarState
    | SelectHomeSidebarNode
    | SelectHomeSidebarNodeFail
    | SelectHomeSidebarNodeSuccess;
