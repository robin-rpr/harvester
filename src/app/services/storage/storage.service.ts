import {Injectable} from '@angular/core';
import {JSONSchema, LocalStorage, StorageMap} from '@ngx-pwa/local-storage';
import {catchError, delay, repeat, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


/**
 * Storage Controller provisioning Control Module
 */
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private localStorage: LocalStorage,
                private storageMap: StorageMap) {

    }


    /**
     * Get Key Value from Local Storage
     * @param key Local Storage Key
     * @param useLegacy Use Legacy LocalStorage
     * @param schema JSONSchema Options for Validation
     * @param keepAlive Tells function to keep Observable hot
     */
    get(key: string, keepAlive?: boolean, schema?: JSONSchema, useLegacy?: boolean): Observable<unknown> | any {
        if(useLegacy && environment.flags.ALLOW_LEGACY_STORAGE) {
            // Use Legacy LocalStorage
            return localStorage.getItem(key);
        }
        return new Observable((subscriber) => {
            this.storageMap.get(key, schema)
                .pipe(
                    tap((chunk) => {
                        subscriber.next(chunk);
                    }),
                    delay(environment.config.storageMap.subscriberInterval),
                    repeat(keepAlive ? undefined : 1),
                    catchError((error: any) => error),
                )
                .subscribe(
                    () => {
                        if (!keepAlive) {
                            subscriber.complete();
                        }
                    },
                    error => {
                        subscriber.error(error);
                        subscriber.complete();
                    }
                );
        });
    }

    /**
     * Set Key with assigned Value in Local Storage
     * @param key Local Storage Key
     * @param data Data to be assigned to key
     * @param schema JSONSchema Options for Validation
     */
    set(key: string, data: any, schema?: JSONSchema): Observable<unknown | {}> {
        return this.storageMap.set(key, data, schema)
            .pipe(
                catchError((error: any) => error)
            );
    }

    /**
     * Delete Key and assigned Value from Local Storage
     * @param key Local Storage Key
     */
    delete(key: string): Observable<unknown | {}> {
        return this.storageMap.delete(key)
            .pipe(
                catchError((error: any) => error)
            );
    }

    /**
     * Delete all items in Local Storage
     */
    clear(): Observable<unknown | {}> {
        return this.storageMap.clear()
            .pipe(
                catchError((error: any) => error)
            );
    }

    /**
     * Get all Keys Stored in Local Storage
     */
    keys(): Observable<string | {}> {
        return this.storageMap.keys()
            .pipe(
                catchError((error: any) => error)
            );
    }

    /**
     * Tells if a key exists in storage
     * @param key Local Storage Key
     */
    has(key: string): Observable<boolean | {}> {
        return this.storageMap.has(key)
            .pipe(
                catchError((error: any) => error)
            );
    }

}
