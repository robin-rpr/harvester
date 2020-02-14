import {TestBed} from '@angular/core/testing';

import {DeviceService} from './device.service';
import {PwaService} from "../pwa/pwa.service";
import {StorageService} from "../storage/storage.service";
import {AuthService} from "../auth/auth.service";
import {NativeService} from "../native/native.service";
import {ServiceWorkerModule} from '@angular/service-worker';

describe('DeviceService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            ServiceWorkerModule.register('', {enabled: false}),
        ],
        providers: [
            PwaService,
            StorageService,
            AuthService,
            NativeService,
        ]
    }));

    it('should be created', () => {
        const service: DeviceService = TestBed.get(DeviceService);
        expect(service).toBeTruthy();
    });
});
