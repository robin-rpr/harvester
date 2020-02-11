import {TestBed} from '@angular/core/testing';

import {HttpService} from './http.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {AppRoutingModule} from '../../app-routing.module';

describe('HttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            AppRoutingModule
        ],
        providers: [
            HttpClient,
            HttpHandler,
        ]
    }));

    it('should be created', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });
});
