import {ITreeNodeAction} from './tree-node-action.model';
import {typeEnums} from '../enums/tree-node.enum';

export interface ITreeNode {
    key: string;
    title: string;
    type: typeEnums;
    icon?: string;
    buttons?: ITreeNodeButton[];
    selected?: boolean;
    action?: ITreeNodeAction;
    payload?: unknown;
    children?: ITreeNode[];
}

export interface ITreeNodeButton {
    icon: string;
    disabled?: boolean;
}

export class TreeNodeFactory {
    constructor() {
    }

    public get mockResponse(): ITreeNode {
        return {
            key: 'HEAD',
            title: 'localhost:4200',
            selected: true,
            type: typeEnums.NODE_GROUP,
            children: [
                {
                    key: 'PROFILE',
                    title: 'Profile Link',
                    type: typeEnums.MULTI_LINK,
                    icon: 'tio-node_multiple',
                    children: [
                        {
                            key: 'PROFILE_NAME',
                            title: 'Name',
                            type: typeEnums.TEXT_ELEMENT,
                            icon: 'tio-selection'
                        },
                        {
                            key: 'PROFILE_USERNAME',
                            title: 'Username',
                            type: typeEnums.TEXT_ELEMENT,
                            icon: 'tio-selection'
                        },
                        {
                            key: 'PROFILE_IMAGE',
                            title: 'Image',
                            type: typeEnums.IMAGE_ELEMENT,
                            icon: 'tio-image'
                        },
                    ]
                },
                {
                    key: 'GITHUB',
                    title: 'GitHub Link',
                    type: typeEnums.SINGLE_LINK,
                    icon: 'tio-node',
                    children: [
                        {
                            key: 'GITHUB_NAME',
                            title: 'Name',
                            type: typeEnums.TEXT_ELEMENT,
                            icon: 'tio-selection'
                        },
                        {
                            key: 'GITHUB_USERNAME',
                            title: 'Username',
                            type: typeEnums.TEXT_ELEMENT,
                            icon: 'tio-selection'
                        },
                        {
                            key: 'GITHUB_FOLLOWER',
                            title: 'Follower',
                            type: typeEnums.TEXT_ELEMENT,
                            icon: 'tio-selection'
                        },
                    ]
                },
                {
                    key: 'MENU',
                    title: 'Menu',
                    type: typeEnums.HTML_ELEMENT,
                    icon: 'tio-code'
                },
                {
                    key: 'SLOGAN',
                    title: 'Slogan',
                    type: typeEnums.TEXT_ELEMENT,
                    icon: 'tio-selection'
                },
                {
                    key: 'LOGO',
                    title: 'Logo',
                    type: typeEnums.IMAGE_ELEMENT,
                    icon: 'tio-image'
                },
            ]
        };
    }
}
