import {Injectable} from '@angular/core';
import {NativeService} from '../native/native.service';
import {combineLatest, fromEvent, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {StorageService} from '../storage/storage.service';
import {AuthService} from '../auth/auth.service';
import {PwaService} from '../pwa/pwa.service';
import {ISystemReport} from '../../models/device.model';

@Injectable({
    providedIn: 'root'
})

/**
 * Native Device Service
 */
export class DeviceService {

    public offline: Observable<Event>;
    public online: Observable<Event>;
    public nativeNetStat: boolean;

    /**
     * @param winRefService Native Window Reference Service
     * @param storageService Provides Local Storage
     * @param authService Provides Auth Service
     * @param pwaService Provides PWA Service
     */
    constructor(
        private winRefService: NativeService,
        private storageService: StorageService,
        private authService: AuthService,
        private pwaService: PwaService
    ) {
        this.offline = fromEvent(window, 'offline');
        this.online = fromEvent(window, 'online');
        this.nativeNetStat = this.winRefService.nativeNavigator.onLine;
    }

    systemReport(): Observable<ISystemReport | {}> {
        return combineLatest(
            this.storageService.get(environment.config.storageMap.keychain.flags, false),
            this.storageService.get(environment.config.storageMap.keychain.pwa, false),
            this.authService.isAuthenticated(),
            this.pwaService.isAvailable(false)
        )
            .pipe(
                map(([flags, pwaStatus, isAuthenticated, swSupport]) => {
                    return {
                        storage: {flags, pwaStatus, isAuthenticated},
                        swSupport: swSupport,
                        userAgent: navigator.userAgent,
                        timestamp: Date()
                    };
                })
            );

    }

}
