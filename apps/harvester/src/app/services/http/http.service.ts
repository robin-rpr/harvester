import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ErrorService} from '../error/error.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
    }

    get(url, options): Observable<any> {
        return this.http.get(url, options).pipe(
            map((res: any) => {
                return res;
            }),
            catchError((error: any) => {
                this.errorService.throw(error);
                return error;
            })
        );
    }

    post(url, body, options): Observable<any> {
        return this.http.post(url, body, options).pipe(
            map((res: any) => {
                return res;
            }),
            catchError((error: any) => {
                this.errorService.throw(error);
                return error;
            })
        );
    }
}
