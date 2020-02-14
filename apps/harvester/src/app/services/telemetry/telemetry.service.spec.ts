import {TestBed} from '@angular/core/testing';

import {TelemetryService} from './telemetry.service';
import {HttpService} from "../http/http.service";
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ModalService} from "../../modules/core/modal/services/modal.service";
import {PwaService} from "../pwa/pwa.service";
import {ServiceWorkerModule} from '@angular/service-worker';

describe('TelemetryService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            HttpClient,
            HttpHandler,
            HttpService,
            ModalService,
            PwaService
        ]
    }));

    it('should be created', () => {
        const service: TelemetryService = TestBed.get(TelemetryService);
        expect(service).toBeTruthy();
    });
});
