import {Injectable} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {NativeService} from '../native/native.service';
import {environment} from '../../../environments/environment';
import {StorageService} from '../storage/storage.service';
import {iif, Observable, of} from 'rxjs';
import {IPWAMetricsModel} from '../../models/storage.model';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
/**
 * Progressive Web App Service
 */
export class PwaService {

    public deferredPrompt: any;
    public update = this.swUpdate;

    /**
     * @param swUpdate Service Worker Update
     * @param winRefService Native Window reference Service
     * @param storageService Service Providing Local Storage
     */
    constructor(private swUpdate: SwUpdate,
                private winRefService: NativeService,
                private storageService: StorageService,
    ) {

        window.addEventListener('beforeinstallprompt', event => {
            this.deferredPrompt = event;
        });

        this.storageService.has(environment.config.storageMap.keychain.pwa)
            .subscribe((exists) => {
                if (!exists) {
                    this.storageService.set(environment.config.storageMap.keychain.pwa,
                        {
                            installed: this.isStandalone(), eventLog: [
                                {outcome: 'initialized', timestamp: new Date(), platform: navigator.userAgent}
                            ]
                        }
                    ).subscribe({
                        error: err => {
                            throw err;
                        },
                    });
                }
            });
    }

    /**
     * Opens Native PWA Install Prompt
     */
    install(): void {
        this.deferredPrompt.prompt();

        this.deferredPrompt.userChoice
            .then((choiceResult) => {

                this.storageService.get(environment.config.storageMap.keychain.pwa, false)
                    .subscribe((oldStatus: IPWAMetricsModel) => {
                        this.storageService.set(environment.config.storageMap.keychain.pwa,
                            {
                                installed: choiceResult.outcome === 'accepted',
                                eventLog: [...oldStatus.eventLog,
                                    {outcome: choiceResult.outcome, timestamp: new Date(), platform: navigator.userAgent}]
                            }
                        ).subscribe();
                    });

                this.deferredPrompt = null;
            });
    }

    /**
     * Returns Standalone Display-Mode Status
     */
    isStandalone(): boolean {
        return window.matchMedia('(display-mode: standalone)').matches;
    }

    /**
     * Display condition for PWA Install Button
     */
    isAvailable(keepAlive): Observable<any> {
        return this.storageService.get(environment.config.storageMap.keychain.pwa, keepAlive)
            .pipe(
                mergeMap(
                    (status: IPWAMetricsModel) => iif(() => {
                        if (!status) {
                            return false;
                        } else {
                            return status['installed'];
                        }
                    }, of(true), of(false))
                ),
                map((isInstalled: boolean) => {
                    return (!this.isStandalone()
                        && environment.production
                        && !isInstalled
                    );
                })
            );
    }

    /**
     * Display condition for PWA Install Button
     */
    isInstallable(): boolean {
        return (!this.isStandalone()
            && environment.production
            && !!this.deferredPrompt);
    }

}
