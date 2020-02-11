import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITreeNode} from '../../models/tree-node.interface';
import {ITreeViewConfig} from '../../models/tree-view-config.interface';
import {typeEnums} from '../../enums/tree-node.enum';

@Component({
    selector: 'app-tree-node',
    templateUrl: './tree-node.component.html',
    styleUrls: ['./tree-node.component.scss'],
})
export class TreeNodeComponent implements OnInit {
    @Input() config: ITreeViewConfig;
    @Input() node: ITreeNode;
    @Input() unfoldedNodes: ITreeNode[];
    @Input() selectedNodes: ITreeNode[];
    @Output() foldingChanged: EventEmitter<ITreeNode> = new EventEmitter();
    @Output() selectionChanged: EventEmitter<ITreeNode> = new EventEmitter();

    constructor() {
    }

    get isGroupNode(): boolean {
        return this.node.type === typeEnums.NODE_GROUP;
    }

    get hasChildren(): boolean {
        return this.node.children && this.node.children.length > 0;
    }

    get children(): ITreeNode[] {
        return this.hasChildren ? this.node.children : [];
    }

    get unfolded(): boolean {
        return !!this.unfoldedNodes.find(candidate => candidate.key === this.node.key);
    }

    get selectionEnabled(): boolean {
        return this.config.selection && this.config.selection.enabled;
    }

    get selected(): boolean {
        return !!this.selectedNodes.find(candidate => candidate.key === this.node.key);
    }

    get maxSelectionsReached(): boolean {
        if (!this.config.selection) {
            return false;
        }
        if (!this.config.selection.maxSelections) {
            return false;
        }
        return this.config.selection.maxSelections <= this.selectedNodes.length;
    }

    get selectionAllowed(): boolean {
        return !this.maxSelectionsReached || this.selected;
    }

    get nodeClickable(): boolean {
        return this.config.selection && this.config.selection.nodeClickable;
    }

    ngOnInit() {
        if (this.nodeClickable && this.selectionAllowed && this.node.selected) {
            this.selectionChanged.emit(this.node);
        }
    }

    nodeClicked() {
        if (this.nodeClickable && this.selectionAllowed) {
            this.selectionChanged.emit(this.node);
        }
    }

    checkboxClicked($event: MouseEvent) {
        $event.stopPropagation();
        if (this.selectionAllowed) {
            this.selectionChanged.emit(this.node);
        }
    }

    toggleChildren($event: MouseEvent) {
        $event.stopPropagation();
        this.foldingChanged.emit(this.node);
    }
}
