import {Component, Input, OnInit} from '@angular/core';
import {ITreeNode} from '../../../../shared/tree-view/models/tree-node.model';

@Component({
    selector: 'app-home-node-config',
    templateUrl: './home-node-config.component.html',
    styleUrls: ['./home-node-config.component.scss']
})
export class HomeNodeConfigComponent implements OnInit {

    @Input() config: ITreeNode;

    constructor() {
    }

    ngOnInit() {
    }

}
