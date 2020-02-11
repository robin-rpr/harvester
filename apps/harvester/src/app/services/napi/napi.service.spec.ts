import {TestBed} from '@angular/core/testing';

import {NAPIService} from './napi.service';

describe('NAPIService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NAPIService = TestBed.get(NAPIService);
        expect(service).toBeTruthy();
    });
});
