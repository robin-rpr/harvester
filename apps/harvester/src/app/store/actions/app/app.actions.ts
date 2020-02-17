import {Action} from '@ngrx/store';
import {ITreeNode} from '../../../modules/shared/tree-view/models/tree-node.model';
import { HttpErrorResponse } from '@angular/common/http';

export const CLEAR_APP_STATE = '[HOME] Clear State';

export const SELECT_APP_NODE = '[APP] Select Sidebar Node';

export const LOAD_APP_NODES = '[APP] Load Sidebar Nodes';
export const LOAD_APP_NODES_FAIL = '[APP] Load Sidebar Nodes Fail';
export const LOAD_APP_NODES_SUCCESS = '[APP] Load Sidebar Nodes Success';

export class ClearAppState implements Action {
    readonly type = CLEAR_APP_STATE;
}

export class SelectAppNode implements Action {
    readonly type = SELECT_APP_NODE;

    constructor(public payload: string[]) {
    }
}

export class LoadAppNodes implements Action {
    readonly type = LOAD_APP_NODES;

    constructor() {
    }
}

export class LoadAppNodesFail implements Action {
    readonly type = LOAD_APP_NODES_FAIL;

    constructor(public payload: HttpErrorResponse) {
    }
}

export class LoadAppNodesSuccess implements Action {
    readonly type = LOAD_APP_NODES_SUCCESS;

    constructor(public payload: ITreeNode) {
    }
}

export type AppActions =
    | ClearAppState
    | SelectAppNode
    | LoadAppNodes
    | LoadAppNodesFail
    | LoadAppNodesSuccess;
