import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import {TreeNodeFactory} from "../../modules/shared/tree-view/models/tree-node.model";
import {HttpService} from "../http/http.service";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private httpService: HttpService) {
    }

    getTreeNodes(): Observable<any> {
        return this.httpService.get(`${environment.api.target}/proxy/`)
            .pipe(map(() => {
                return new TreeNodeFactory().mockResponse
            }))
    }
}
