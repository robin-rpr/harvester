import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal--container/modal.component';
import {ModalService} from './services/modal.service';
import {ButtonModule} from '../../shared/button/button.module';

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
