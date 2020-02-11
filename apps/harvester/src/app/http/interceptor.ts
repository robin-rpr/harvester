import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';
import {environment} from '../../environments/environment';
import {StorageService} from '../services/storage/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
                private storageService: StorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // FIXME: [NOASSIGN] Replace deprecated Legacy StorageService Request
        const {token} = JSON.parse(this.storageService.get(environment.config.storageMap.keychain.credentials, undefined, undefined, true));

        request = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
        });

        return next.handle(request);
    }
}
