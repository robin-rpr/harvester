import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {StorageService} from "../storage/storage.service";

describe('AuthService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            StorageService
        ]
    }));

    it('should be created', () => {
        const service: AuthService = TestBed.get(AuthService);
        expect(service).toBeTruthy();
    });
});
