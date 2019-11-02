import {Component, Inject, OnInit} from '@angular/core';
import {GiphyService} from '../../services/giphy/giphy.service';
import {environment} from '../../../environments/environment';
import {CONTAINER_DATA, ModalService} from '../../modules/core/modal/services/modal.service';
import {ModalConfig} from '../../modules/core/modal/models/modal.interface';

@Component({
    selector: 'app-message-modal',
    templateUrl: './message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']
})

export class MessageModalComponent implements OnInit {

    private imageURL: string;
    @Inject(CONTAINER_DATA) public componentData: any;

    environment = environment;
    imageLoading: boolean;

    constructor(
        private giphyService: GiphyService,
        public modalService: ModalService,
    ) {
        this.imageLoading = true;
    }

    ngOnInit() {

        this.modalService.config$.subscribe((config: ModalConfig) => {
            if (environment.experimental.SUPER_SECRET_SETTING) {
                this.giphyService.fun(config.payload.tags).subscribe(res => {
                        this.imageURL = res.data.image_original_url;
                        this.imageLoading = false;
                    },
                    err => {
                        throw err;
                    });
            }
        });
    }

}
