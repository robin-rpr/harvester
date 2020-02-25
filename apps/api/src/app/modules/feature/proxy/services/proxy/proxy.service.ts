import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import {JSDOM} from 'jsdom'
import {environment} from "../../../../../../environments/environment";

@Injectable()
export class ProxyService {
    constructor(private readonly httpService: HttpService) {}

    getPage(url, injectJS?: string, injectHTML?: string, injectCSS?: string): Observable<AxiosResponse<unknown>> {
        return this.httpService.get(url)
            .pipe(
                map( res => {
                    if(injectJS || injectCSS || injectHTML) {
                        const DOM = new JSDOM(res.data, { runScripts: "outside-only" });
                        DOM.window.document.head.insertAdjacentHTML("afterbegin", `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />${DOM.window.document.head.innerHTML}`);
                        DOM.window.document.body.insertAdjacentHTML("afterbegin",`<style>${injectCSS ? injectCSS : ''}</style>${injectHTML ? injectHTML : ''}<script>${injectJS ? injectJS : ''}</script>${DOM.window.document.body.innerHTML}`);
                        res.data = DOM.serialize();
                    }
                    return res;
                }),
                map(res => {
                    const regex = /(['"(])((https?:)?\/\/.+?)(['")])/ig;

                    let link;

                    while((link = regex.exec(res.data)) !== null) {
                        res.data = res.data.replace(link[2], `${environment.api.target}/proxy/asset/?url=` + encodeURIComponent(link[2]));
                    }

                    return res;
                }),
                map(res => {
                    res.headers.Server = `HARVESTER_SYNC`;
                    return res;
                }),
            )
    }

    getAsset(url): Observable<AxiosResponse<unknown>> {
        return this.httpService.get(url)
            .pipe(
                map(res => {
                    res.headers.Server = `HARVESTER_SYNC`;
                    return res;
                }),
            )
    }
}
