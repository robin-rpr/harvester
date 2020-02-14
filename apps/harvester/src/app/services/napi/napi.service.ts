import {Injectable} from '@angular/core';
import {IAPIType, IRegisterType} from '../../models/napi.model';

/// <reference types="chrome"/>

@Injectable({
    providedIn: 'root'
})


export class NAPIService {

    constructor() {
        // @ts-ignore
        if (!(window.chrome && chrome.runtime && chrome.runtime.id)) {
            for (const method of Object.getOwnPropertyNames(NAPIService.prototype).slice(1)) {
                NAPIService.prototype[method] = function() {
                    console.warn(`[NAPIService] Called Monkeypatch: ${method}(...)`, arguments);
                };
            }
        }
    }

    public register(type: IRegisterType, payload): void {
        switch (type) {
            case IRegisterType.DEVTOOLS_PANEL: {
                this._api(IAPIType.CHROME).devtools.panels.create(
                    payload.title,
                    payload.iconPath,
                    payload.pagePath
                );
                break;
            }
            default:
                throw 'Unknown Register Type';
        }
    }

    private _api(type: IAPIType): any {
        switch (type) {
            case IAPIType.CHROME:
                // @ts-ignore
                return chrome;
            default:
                throw 'Unknown API Type';
        }
    }

}
