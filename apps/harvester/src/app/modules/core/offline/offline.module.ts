import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfflineComponent} from './components/offline--container/offline.component';
import {ButtonModule} from '../../shared/button/button.module';

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
