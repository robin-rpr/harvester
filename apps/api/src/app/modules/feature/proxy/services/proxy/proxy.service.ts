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
                case 'tempo': {
                    website = {
                        domain: 'www.tempo.io',
                        secure: true
                    }
                    break;
                }
                case 'wwatlassian': {
                    website = {
                        domain: 'webworker.atlassian.net',
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
                `${website.secure ? 'https' : 'http'}://${website.domain}/${uri}`,
                { responseType: 'arraybuffer' }
            )
                    .pipe(
                        map((res: any) => {
                            switch(true) {
                                case res.headers['content-type'].includes('text/html'): {
                                   const DOM = new JSDOM(
                                        res.data.toString('utf8'), { runScripts: "outside-only" });

                                        let serializedDOM = this.injectDOM(
                                            DOM, injectJS, injectCSS, injectHTML
                                        )

                                        const regex = new RegExp(`https?:\\/\\/${website.domain}`, 'gi')
                                        const regexJSON = new RegExp(`https?:(?:\\\\)*/(?:\\\\)*/${website.domain}`, 'gi')

                                        serializedDOM = serializedDOM.replace(
                                            regex,
                                            `${environment.api.secure ? 'http':'https'}://${identification}.${environment.api.proxy}`
                                        );
                                        
                                        serializedDOM = serializedDOM.replace(
                                            regexJSON,
                                            `${environment.api.secure ? 'http':'https'}:\\\/\\\/${identification}.${environment.api.proxy}`
                                        );
                                        
                                        return { ...res, data: serializedDOM }
                                };
                                case new RegExp(`(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*\\.(?:jpg|gif|png))(?:\\?([^#]*))?(?:#(.*))?`).test(uri): {
                                   
                                    res = {
                                        ...res,
                                        data: Buffer.from(String.fromCharCode(...new Uint8Array(res.data)), 'binary')
                                    }   
                                    
                                    return res;
                                }
                                default: return res;
                            }
                        })
                )
                .subscribe(
                    data => {
                        resolve(<ProxyResponse>{
                            status: data.status,
                            headers: data.headers,
                            data: data.data
                        })
                    },
                    err => {
                        reject(<ProxyResponse>{
                            status: 500,
                            headers: {},
                            data: err.stack
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
