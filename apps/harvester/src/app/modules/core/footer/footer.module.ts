import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer--container/footer.component';
import {ButtonModule} from '../../shared/button/button.module';
import {HookModule} from '../../shared/hook/hook.module';
import {FooterIntelliComponent} from './components/footer-intelli/footer-intelli.component';
import {FooterControlsComponent} from './components/footer-controls/footer-controls.component';
import {NavigatorModule} from '../../shared/navigator/navigator.module';
import {DropdownModule} from '../../shared/dropdown/dropdown.module';
import {I18nModule} from "../../shared/i18n/i18n.module";


@NgModule({
    declarations: [
        FooterComponent,
        FooterIntelliComponent,
        FooterControlsComponent,
    ],
    exports: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        HookModule,
        NavigatorModule,
        DropdownModule,
        I18nModule,
    ]
})
export class FooterModule {
}
