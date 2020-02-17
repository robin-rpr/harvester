import {typeEnums} from "../modules/shared/tree-view/enums/tree-node.enum";
import {ITreeNode} from "../modules/shared/tree-view/models/tree-node.model";

export interface IError {
    name: string;
    status: number;
    statusText?: string;
    message: string;
    stack?: string; // CAUTION: Non-Standard property
}

export class ErrorFactory {
    constructor() {
    }

    public get mockResponse(): IError {
        return {
            name: 'Internal Server Error',
            status: 500,
            message: 'Loading documents failed'
        }
    }
}
