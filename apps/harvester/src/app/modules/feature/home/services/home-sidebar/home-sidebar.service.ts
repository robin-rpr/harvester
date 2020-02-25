import {Injectable} from '@angular/core';
import {HttpService} from "../../../../../services/http/http.service";

@Injectable({
    providedIn: 'root'
})
export class HomeSidebarService {

    constructor(private httpService: HttpService) {
    }


}
