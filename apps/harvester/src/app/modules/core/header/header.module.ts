import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header--container/header.component';
import {ButtonModule} from '../../shared/button/button.module';
import {HookModule} from '../../shared/hook/hook.module';
import {HeaderNavigatorComponent} from './components/header-navigator/header-navigator.component';
import {HeaderControlsComponent} from './components/header-controls/header-controls.component';
import {NavigatorModule} from '../../shared/navigator/navigator.module';
import {DropdownModule} from '../../shared/dropdown/dropdown.module';
import {HomeStateFacade} from "../../feature/home/home-state.facade";
import {TreeNodeUtils} from "../../shared/tree-view/utils/tree-node.utils";


@NgModule({
    declarations: [HeaderComponent, HeaderNavigatorComponent, HeaderControlsComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        HookModule,
        NavigatorModule,
        DropdownModule
    ],
    providers: [
        HomeStateFacade,
        TreeNodeUtils
    ]

})
export class HeaderModule {
}
