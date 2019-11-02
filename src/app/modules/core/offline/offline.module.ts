import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../../shared/button/button.module';
import {OfflineComponent} from './components/offline/offline.component';

@NgModule({
    declarations: [OfflineComponent],
    imports: [
        CommonModule,
        ButtonModule
    ],
    exports: [OfflineComponent]
})
export class OfflineModule {
}
