import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ITreeNode} from '../../../../shared/tree-view/models/tree-node.model';
import {ITreeViewConfig} from '../../../../shared/tree-view/models/tree-view-config.model';
import {typeEnums} from '../../../../shared/tree-view/enums/tree-node.enum';

@Component({
    selector: 'app-home-sidebar',
    templateUrl: './home-sidebar.component.html',
    styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {

    @Output() SELECT: EventEmitter<ITreeNode[]> = new EventEmitter();
    @Input() treeNodes: ITreeNode;
    treeViewConfig: ITreeViewConfig = {selection: {enabled: true, nodeClickable: true}};

    constructor() {
    }

    ngOnInit() {
        console.log(this.treeNodes);
    }


    select(event: ITreeNode[]): void {
        this.SELECT.emit(event);
    }

}
