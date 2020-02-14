import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ITreeNode} from '../../../../shared/tree-view/models/tree-node.interface';
import {ITreeViewConfig} from '../../../../shared/tree-view/models/tree-view-config.interface';
import {typeEnums} from '../../../../shared/tree-view/enums/tree-node.enum';

@Component({
    selector: 'app-home-sidebar',
    templateUrl: './home-sidebar.component.html',
    styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {

    @Output() SELECT: EventEmitter<ITreeNode[]> = new EventEmitter();

    treeNodes: ITreeNode[];
    treeViewConfig: ITreeViewConfig = {selection: {enabled: true, nodeClickable: true}};

    constructor() {
    }

    ngOnInit() {
        this.treeNodes = [{
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
        }];
    }


    select(event: ITreeNode[]): void {
        this.SELECT.emit(event);
    }

}
