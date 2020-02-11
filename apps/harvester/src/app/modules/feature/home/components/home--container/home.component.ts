import {AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit} from '@angular/core';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router} from '@angular/router';
import {ErrorService} from '../../../../../services/error/error.service';
import {HomeStateFacade} from '../../home-state.facade';
import {ITreeNode} from '../../../../shared/tree-view/models/tree-node.interface';
import {colorEnums} from '../../../../../enums/color.enums';
import {HomeService} from '../../services/home/home.service';
import {HomeConfig} from '../../models/home.model';
import {ComponentPortal, DomPortalHost} from '@angular/cdk/portal';
import {Observable, of} from 'rxjs';
import {IHomeSidebarState} from '../../store/reducers/home-sidebar/home-sidebar.reducer';
import {IHomeState} from '../../store/reducers/home/home.reducer';
import * as treeNodeEnums from '../../../../shared/tree-view/enums/tree-node.enum';
import * as homeIabEnums from '../../enums/home-iab.enum';
import {HomeGroupComponent} from '../home-group/home-group.component';
import {HomeNodeComponent} from '../home-node/home-node.component';
import {filter, map} from 'rxjs/operators';
import { ResizeEvent } from 'angular-resizable-element';

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

    /**
     * @param authService Responsible for API calls
     * @param pwaService Provides Service Worker functions
     * @param router Responsible for page navigation
     * @param homeService Home Service
     * @param errorService Provides Error Service
     * @param componentFactoryResolver Factory Resolver for Portal
     * @param injector Injector
     * @param appRef Application Ref
     * @param homeStateFacade Main State Facade
     */
    constructor(private authService: AuthService,
                public pwaService: PwaService,
                private router: Router,
                private errorService: ErrorService,
                private homeService: HomeService,
                private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private appRef: ApplicationRef,
                private homeStateFacade: HomeStateFacade
    ) {
    }

    ngOnInit(): void {
        // FIXME: [NOASSIGN] Not unwrapping this Observable causes the Observable to never end
        this.pwaService.isAvailable(true)
            .subscribe(res => {
                this.showInstallButton = res;
            });

        this.homeSidebarState.pipe(
            map(state => state.selectedTreeNodes),
            filter((selectedTreeNodes: ITreeNode[]) => selectedTreeNodes.length !== 0)
        )
            .subscribe((selectedTreeNodes: ITreeNode[]) => { // FIXME [NOASSIGN]: Extremely unperformant
                this.homeService.open({
                    component: selectedTreeNodes[0].type === this.treeNodeTypeEnums.NODE_GROUP ? HomeGroupComponent : HomeNodeComponent,
                    payload: selectedTreeNodes[0]
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

    selectNode(event: ITreeNode[]): void {
        this.homeStateFacade.selectHomeSidebarNode(event);
    }

    /**
     * Opens Native PWA Install Prompt
     */
    installPwa(): void {
        this.pwaService.install();
    }

}
