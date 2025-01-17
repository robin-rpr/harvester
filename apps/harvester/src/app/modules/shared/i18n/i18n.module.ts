import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nPipe} from "./pipes/i18n/i18n.pipe";


@NgModule({
    declarations: [
        I18nPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        I18nPipe
    ]
})
export class I18nModule {
}
