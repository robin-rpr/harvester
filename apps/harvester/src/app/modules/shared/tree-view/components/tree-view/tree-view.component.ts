import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITreeNode} from '../../models/tree-node.interface';
import {ITreeViewConfig} from '../../models/tree-view-config.interface';
import {NodeUtils} from '../../utils/node.utils';

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
    @Input() config: ITreeViewConfig = {};
    @Input() rootNodes: ITreeNode[] = [];
    @Output() foldingChanged: EventEmitter<ITreeNode[]> = new EventEmitter();
    @Output() selectionChanged: EventEmitter<ITreeNode[]> = new EventEmitter();

    constructor(private readonly nodeUtils: NodeUtils, private readonly chr: ChangeDetectorRef) {
    }

    // tslint:disable-next-line:variable-name
    private _unfoldedNodes: ITreeNode[] = [];

    get unfoldedNodes(): ITreeNode[] {
        return this._unfoldedNodes;
    }

    // tslint:disable-next-line:variable-name
    private _selectedNodes: ITreeNode[] = [];

    get selectedNodes(): ITreeNode[] {
        return this._selectedNodes;
    }

    set unfoldedNodeKeys(keys: string[]) {
        this._unfoldedNodes = this.nodeUtils.findNodesDeep(this.rootNodes, keys);
        this.chr.detectChanges();
    }

    set selectedNodeKeys(keys: string[]) {
        this._selectedNodes = this.nodeUtils.findNodesDeep(this.rootNodes, keys);
        this.chr.detectChanges();
    }

    ngOnInit() {
    }

    public updateUnfoldedNodes(node: ITreeNode): void {
        this._unfoldedNodes = this.nodeUtils.nodeAccumulator(this._unfoldedNodes, node);
        this.foldingChanged.emit(this._unfoldedNodes);
    }

    public updateSelectedNodes(node: ITreeNode): void {
        this._selectedNodes = [node];
        this.selectionChanged.emit(this._selectedNodes);
    }

    public giveId(index: number, node: ITreeNode): string | number {
        return node ? node.key : index;
    }
}
