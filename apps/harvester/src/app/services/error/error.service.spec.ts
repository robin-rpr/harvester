import {TestBed} from '@angular/core/testing';

import {ErrorService} from './error.service';
import {ModalService} from "../../modules/core/modal/services/modal.service";
import {DeviceService} from "../device/device.service";
import {PwaService} from "../pwa/pwa.service";
import {ServiceWorkerModule} from '@angular/service-worker';

describe('ErrorService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            ModalService,
            DeviceService,
            PwaService
        ]
    }));

    it('should be created', () => {
        const service: ErrorService = TestBed.get(ErrorService);
        expect(service).toBeTruthy();
    });
});
