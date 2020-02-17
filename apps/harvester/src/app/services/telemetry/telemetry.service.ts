import {Injectable} from '@angular/core';
import {ITelemetry} from '../../models/telemetry.model';
import {HttpService} from '../http/http.service';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TelemetryService {

    constructor(private httpService: HttpService) {
    }

    push(payload: ITelemetry): Observable<any> {
        return this.httpService.post(`${environment.api.target}/telemetry/push`, payload, {});
    }
}
