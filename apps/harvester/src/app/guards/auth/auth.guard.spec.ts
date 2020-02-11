import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
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
        const service: AuthGuard = TestBed.get(AuthGuard);
        expect(service).toBeTruthy();
    });
});
