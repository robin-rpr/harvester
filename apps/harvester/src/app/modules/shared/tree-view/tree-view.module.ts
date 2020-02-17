import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeViewComponent} from './components/tree-view/tree-view.component';
import {TreeNodeComponent} from './components/tree-node/tree-node.component';
import {TreeNodeUtils} from './utils/tree-node.utils';

@NgModule({
    declarations: [TreeViewComponent, TreeNodeComponent],
    imports: [CommonModule],
    exports: [TreeViewComponent],
    providers: [TreeNodeUtils],
})
export class TreeViewModule {
}
