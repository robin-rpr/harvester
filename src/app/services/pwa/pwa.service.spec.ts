import {TestBed} from '@angular/core/testing';

import {PwaService} from './pwa.service';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import {WinRefService} from '../win-ref/native.service';

describe('PwaService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            SwUpdate,
            WinRefService,
            PwaService
        ]
    }));

    it('should be created', () => {
        const service: PwaService = TestBed.get(PwaService);
        expect(service).toBeTruthy();
    });
});
