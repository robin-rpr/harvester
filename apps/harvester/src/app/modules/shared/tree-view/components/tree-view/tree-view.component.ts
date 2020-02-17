import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITreeNode} from '../../models/tree-node.model';
import {ITreeViewConfig} from '../../models/tree-view-config.model';
import {TreeNodeUtils} from '../../utils/tree-node.utils';

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
    @Input() config: ITreeViewConfig = {};
    @Input() rootNodes: ITreeNode[] = [];
    @Output() foldingChanged: EventEmitter<ITreeNode[]> = new EventEmitter();
    @Output() selectionChanged: EventEmitter<string[]> = new EventEmitter();

    constructor(private readonly treeNodeUtils: TreeNodeUtils, private readonly chr: ChangeDetectorRef) {
    }

    // tslint:disable-next-line:variable-name
    private _unfoldedNodes: ITreeNode[] = [];

    get unfoldedNodes(): ITreeNode[] {
        return this._unfoldedNodes;
    }

    // tslint:disable-next-line:variable-name
    private _selectedNodes: string[] = [];

    get selectedNodes(): string[] {
        return this._selectedNodes;
    }

    ngOnInit() {
    }

    public updateUnfoldedNodes(node: ITreeNode): void {
        this._unfoldedNodes = this.treeNodeUtils.nodeAccumulator(this._unfoldedNodes, node);
        this.foldingChanged.emit(this._unfoldedNodes);
    }

    public updateSelectedNodes(path: string): void {
        this._selectedNodes = [path];
        this.selectionChanged.emit(this._selectedNodes);
    }

    public giveId(index: number, node: ITreeNode): string | number {
        return node ? node.key : index;
    }
}
