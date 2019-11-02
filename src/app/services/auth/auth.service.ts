import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ICredentialsModel} from '../../models/credentials.model';
import {StorageService} from '../storage/storage.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
/**
 * Authentication Service
 */
export class AuthService {

    constructor(
        private storageService: StorageService
    ) {
    }

    /**
     * Store Credentials in LocalStorage
     * @param username Authentication Username
     * @param token JWToken
     */
    setCredentials(username: string, token: string): Observable<any> {
        if(environment.flags.ALLOW_LEGACY_STORAGE) {
            localStorage.setItem(environment.config.storageMap.keychain.credentials, JSON.stringify({username, token}));
        }

        return this.storageService.set(environment.config.storageMap.keychain.credentials, {
            username, token
        });
    }

    /**
     * Get credentials form LocalStorage
     * @return User Credentials
     */
    getCredentials(): Observable<ICredentialsModel | unknown> {
        return this.storageService.get(environment.config.storageMap.keychain.credentials)
            .pipe(map((credentials: ICredentialsModel) => {
                return credentials;
            }));
    }

    /**
     * Clear credentials form LocalStorage
     */
    clearCredentials(): Observable<any> {
        return this.storageService.delete(environment.config.storageMap.keychain.credentials);
    }

    /**
     * Check if currently logged-in User is authenticated
     * @return User Authentication Status
     */
    isAuthenticated(): Observable<boolean | {}> {
        return this.storageService.has(environment.config.storageMap.keychain.credentials);
    }
}
