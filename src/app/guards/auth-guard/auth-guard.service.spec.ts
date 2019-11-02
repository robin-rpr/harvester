import {TestBed} from '@angular/core/testing';

import {AuthGuardService} from './auth-guard.service';
import {AuthService} from '../../services/auth/auth.service';
import {AppRoutingModule} from '../../app-routing.module';

describe('AuthGuardService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            AppRoutingModule
        ],
        providers: [
            AuthService
        ]
    }));

    it('should be created', () => {
        const service: AuthGuardService = TestBed.get(AuthGuardService);
        expect(service).toBeTruthy();
    });
});
