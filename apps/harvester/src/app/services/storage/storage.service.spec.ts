import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';

describe('StorageService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [StorageService]
    }));

    it('should be created', () => {
        const service: StorageService = TestBed.get(StorageService);
        expect(service).toBeTruthy();
    });
});
