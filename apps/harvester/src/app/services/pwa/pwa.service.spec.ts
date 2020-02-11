import {TestBed} from '@angular/core/testing';
import {PwaService} from './pwa.service';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

describe('PwaService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            SwUpdate,
            PwaService
        ]
    }));

    it('should be created', () => {
        const service: PwaService = TestBed.get(PwaService);
        expect(service).toBeTruthy();
    });
});
