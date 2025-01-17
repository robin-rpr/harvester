import {Component} from '@angular/core';
import {ModalService} from '../../modules/core/modal/services/modal.service';

@Component({
    selector: 'app-error-modal',
    templateUrl: './error-modal.component.html',
    styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {

    constructor(
        public modalService: ModalService
    ) {
    }

}
