import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {CONTAINER_DATA, ModalService} from '../../modules/core/modal/services/modal.service';

@Component({
    selector: 'app-message-modal',
    templateUrl: './message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']
})

export class MessageModalComponent implements OnInit {

    @Inject(CONTAINER_DATA) public componentData: any;
    environment = environment;
    imageLoading: boolean;
    private imageURL: string;

    constructor(
        public modalService: ModalService,
    ) {
    }

    ngOnInit() {
    }

}
