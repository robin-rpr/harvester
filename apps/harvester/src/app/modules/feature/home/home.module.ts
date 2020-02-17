import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HookModule} from '../../shared/hook/hook.module';
import {HomeComponent} from './components/home--container/home.component';
import {ButtonModule} from '../../shared/button/button.module';
import {HomeSidebarComponent} from './components/home-sidebar/home-sidebar.component';
import {TreeViewModule} from '../../shared/tree-view/tree-view.module';
import {HomeNodeComponent} from './components/home-node/home-node.component';
import {HomeService} from './services/home/home.service';
import {TabsModule} from '../../shared/tabs/tabs.module';
import {HomeNodeConfigComponent} from './components/home-node-config/home-node-config.component';
import {HomeNodePreviewComponent} from './components/home-node-preview/home-node-preview.component';
import {HomeGroupComponent} from './components/home-group/home-group.component';
import {HomeStateFacade} from './home-state.facade';
import {StoreModule} from '@ngrx/store';
import {homeReducers, homeSidebarReducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffects, HomeSidebarEffects} from './store/effects';
import { HomeIabComponent } from './components/home-iab/home-iab.component';
import {ResizableModule} from 'angular-resizable-element';
import {I18nModule} from "../../shared/i18n/i18n.module";

@NgModule({
    declarations: [
        HomeComponent,
        HomeSidebarComponent,
        HomeNodeComponent,
        HomeNodeConfigComponent,
        HomeNodePreviewComponent,
        HomeGroupComponent,
        HomeIabComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        HookModule,
        ButtonModule,
        ReactiveFormsModule,
        TreeViewModule,
        TabsModule,
        StoreModule.forFeature('HOME_STATE', homeReducers),
        StoreModule.forFeature('HOME_SIDEBAR_STATE', homeSidebarReducers),
        EffectsModule.forFeature([HomeEffects, HomeSidebarEffects]),
        ResizableModule,
        I18nModule
    ],
    providers: [
        HomeService,
        HomeStateFacade,
    ]
})
export class HomeModule {
}
