import {TestBed} from '@angular/core/testing';

import {HttpService} from './http.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';
import {ModalService} from "../../modules/core/modal/services/modal.service";
import {PwaService} from "../pwa/pwa.service";
import {ServiceWorkerModule} from '@angular/service-worker';

describe('HttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            AppRoutingModule,
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            HttpClient,
            ModalService,
            HttpHandler,
            PwaService
        ]
    }));

    it('should be created', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });
});
