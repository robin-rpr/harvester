import {TestBed} from '@angular/core/testing';

import {NativeService} from './native.service';

describe('WinRefService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NativeService = TestBed.get(NativeService);
        expect(service).toBeTruthy();
    });
});
