import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router} from '@angular/router';
import {ErrorService} from '../../../../../services/error/error.service';
import {HomeStateFacade} from '../../home-state.facade';
import {colorEnums} from '../../../../../enums/color.enums';
import {HomeService} from '../../services/home/home.service';
import {HomeConfig} from '../../models/home.model';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {Observable} from 'rxjs';
import {IHomeSidebarState} from '../../store/reducers/home-sidebar/home-sidebar.reducer';
import {IHomeState} from '../../store/reducers/home/home.reducer';
import * as treeNodeEnums from '../../../../shared/tree-view/enums/tree-node.enum';
import * as homeIabEnums from '../../enums/home-iab.enum';
import {HomeGroupComponent} from '../home-group/home-group.component';
import {HomeNodeComponent} from '../home-node/home-node.component';
import {filter, withLatestFrom, distinctUntilChanged} from 'rxjs/operators';
import {TreeNodeUtils} from "../../../../shared/tree-view/utils/tree-node.utils";
import {AppStateFacade} from "../../../../../app-state.facade";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
/**
 * Home Component
 */
export class HomeComponent implements OnInit, AfterViewInit {

    showInstallButton: boolean;
    colorEnums = colorEnums;
    treeNodeTypeEnums = treeNodeEnums.typeEnums;
    homeIabTypeEnums = homeIabEnums.typeEnums;

    homeSidebarState: Observable<IHomeSidebarState> = this.homeStateFacade.selectHomeSidebarState$;
    homeState: Observable<IHomeState> = this.homeStateFacade.selectHomeState$;

    private portalHost: DomPortalHost;

    constructor(private authService: AuthService,
                public pwaService: PwaService,
                private router: Router,
                private errorService: ErrorService,
                private homeService: HomeService,
                private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private appRef: ApplicationRef,
                private homeStateFacade: HomeStateFacade,
                public appStateFacade: AppStateFacade,
                private treeNodeUtils: TreeNodeUtils
    ) {
    }

    ngOnInit(): void {
        this.appStateFacade.loadAppNodes();

        // FIXME: [NOASSIGN] Not unwrapping this Observable causes the Observable to never end
        this.pwaService.isAvailable(true)
            .subscribe(res => {
                this.showInstallButton = res;
            });

        this.appStateFacade.selectSelectedNodes$.pipe(
            filter((selectedTreeNodes: string[]) => selectedTreeNodes.length > 0),
            withLatestFrom(this.appStateFacade.selectNodes$),
            distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        )
            .subscribe(([selectedTreeNodes, treeNodes]) => {
                const resolvedTreeNodes = this.treeNodeUtils.findNodesDeep(treeNodes, selectedTreeNodes[0].split('.'));
                this.homeService.open({
                    component: resolvedTreeNodes[resolvedTreeNodes.length - 1].type === this.treeNodeTypeEnums.NODE_GROUP ? HomeGroupComponent : HomeNodeComponent,
                    payload: resolvedTreeNodes[resolvedTreeNodes.length - 1]
                }).subscribe();
            });
    }

    ngAfterViewInit(): void {
        this.portalHost = new DomPortalHost(
            document.querySelector('#portal'),
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );

        this.homeService.config$.subscribe((config: HomeConfig) => {

            try {
                this.portalHost.attach(new ComponentPortal(config.component));
            } catch (err) {
                console.log(err);
            }
        }, err => {
            throw err;
        });

        this.homeService.visible$.subscribe((visibility: boolean) => {
            if (!visibility) {
                this.portalHost.detach();
            }
        }, err => {
            throw err;
        });
    }

    selectNode(event: string[]): void {
        this.appStateFacade.selectAppNode(event);
    }

    /**
     * Opens Native PWA Install Prompt
     */
    installPwa(): void {
        this.pwaService.install();
    }

}
