import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios'
import {Observable} from 'rxjs';
import {map, catchError} from 'rxjs/operators'
import {JSDOM} from 'jsdom'
import {environment} from "../../../../../../environments/environment";
import {ProxyResponse} from '../../models/response.model';

@Injectable()
export class ProxyService {
    constructor(private readonly httpService: HttpService) {}

    get(
        uri: string,
        identification: string,
        injectJS?: string,
        injectHTML?: string,
        injectCSS?: string
    ): Promise<ProxyResponse> {
        return new Promise(async (resolve, reject) => {
            /* TODO: Make instead DB Call */
            
            let website: { domain: string; secure: boolean; };
            switch(identification) {
                case 'webworker': {
                    website = {
                        domain: 'webworker.com',
                        secure: true
                    }
                    break;
                }
                default: {
                    reject({
                        status: 404,
                        data: new Error('Not found!')
                    })
                }
            }

            this.httpService.get(
                `${website.secure ? 'https' : 'http'}://${website.domain}/${uri}`)
            .pipe(
                map((res: any) => {
                    const DOM = new JSDOM(
                        res.data, { runScripts: "outside-only" });
                    
                    return this.injectDOM(
                        DOM, injectJS, injectCSS, injectHTML
                    )
                }),
                map((serializedDOM: string) => {
                    const regex = new RegExp(`/(['"(])((http[s]?):\/\/)?${website.domain}(\/[\w\-\.]+[^#?\s]+)(.*)?(['")])/ig`)
                    
                    let link: RegExpExecArray;

                    while(
                        (link = regex.exec(serializedDOM)) !== null
                    ) {
                        serializedDOM = serializedDOM.replace(
                            link[2],
                            `${environment.api.secure ? 'http':'https'}://${identification}.${environment.api.proxy}/${link[4]}`
                        );
                    }

                })
            )
            .subscribe(
                data => {
                    resolve(<ProxyResponse>{
                        status: 200,
                        data
                    })
                },
                err => {
                    reject(<ProxyResponse>{
                        status: 500,
                        data: err
                    })
                }
            )
        })
    }
    
    injectDOM(
        DOM: any, /* FIXME: Change Type to DOM */
        injectJS: string,
        injectCSS?: string,
        injectHTML?: string
    ): string {
        /* Inject Header */
        DOM.window.document.head.insertAdjacentHTML(
            "afterbegin",
            `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />${DOM.window.document.head.innerHTML}`);
        
        /* Inject */
        DOM.window.document.body.insertAdjacentHTML(
            "afterbegin",
            `<style>${injectCSS ? injectCSS : ''}</style>${injectHTML ? injectHTML : ''}<script>${injectJS ? injectJS : ''}</script>${DOM.window.document.body.innerHTML}`);
        
        return DOM.serialize();
    }
}
