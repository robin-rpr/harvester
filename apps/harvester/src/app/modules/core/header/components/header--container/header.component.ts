import {Component, OnInit} from '@angular/core';
import {colorEnums} from '../../../../../enums/color.enums';
import {HomeStateFacade} from "../../../../feature/home/home-state.facade";
import {Observable} from 'rxjs';
import {TreeNodeUtils} from "../../../../shared/tree-view/utils/tree-node.utils";
import {INavigator} from "../../../../shared/navigator/models/navigator.model";
import {AppStateFacade} from "../../../../../app-state.facade";
import {distinctUntilChanged, filter, map, withLatestFrom} from 'rxjs/operators'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    colorEnums = colorEnums;
    nodes$: Observable<INavigator[]>;

    constructor(
        private homeStateFacade: HomeStateFacade,
        private appStateFacade: AppStateFacade,
        private treeNodeUtils: TreeNodeUtils
    ) {
    }

    ngOnInit(): void {
        this.nodes$ = this.appStateFacade.selectSelectedNodes$.pipe(
            filter((selectedTreeNodes: string[]) => selectedTreeNodes.length > 0),
            withLatestFrom(this.appStateFacade.selectNodes$),
            distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
            map(([selectedTreeNodes, treeNodes]) => {
                const resolvedTreeNodes = this.treeNodeUtils.findNodesDeep(treeNodes, selectedTreeNodes[0].split('.'));
                return resolvedTreeNodes.map(node => {
                    return <INavigator>{
                        title: node.title,
                        icon: node.icon
                    }
                })
            })
        )

        this.appStateFacade.selectSelectedNodes$
            .subscribe(nodes => {
                    console.log('nodes', nodes)
                }
            )
    }
}
