import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from '../../shared/button/button.module';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from './services/modal.service';

@NgModule({
    declarations: [ModalComponent],
    imports: [
        CommonModule,
        ButtonModule
    ],
    providers: [
        ModalService,
        ModalComponent
    ],
    exports: [ModalComponent]
})
export class ModalModule {
}
