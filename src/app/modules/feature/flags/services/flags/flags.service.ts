import {Injectable} from '@angular/core';
import {environment} from '../../../../../../environments/environment';
import {StorageService} from '../../../../../services/storage/storage.service';

@Injectable({
    providedIn: 'root'
})
export class FlagsService {

    readonly localCopy;

    constructor(
        private storageService: StorageService
    ) {
        // @ts-ignore:disable-next-line
        environment.experimental = {...environment.experimental, state: 'PRISTINE'};
        this.localCopy = {...environment.flags};
    }

    set(id, value) {
        environment.flags[id] = value;
        this.sync();
    }

    private _sortKeys(unordered) {
        const ordered = {};
        Object.keys(unordered).sort().forEach(function (key) {
            ordered[key] = unordered[key];
        });
        return ordered;
    }

    private _compareUnsortedObjects(a, b) {
        const aObj = this._sortKeys(a);
        const bObj = this._sortKeys(b);
        return JSON.stringify(aObj) === JSON.stringify(bObj);
    }

    sync() {
        this.storageService.get(environment.config.storageMap.keychain.flags, false)
            .subscribe((external) => {
                let config;

                if (external && this._compareUnsortedObjects(environment.flags, this.localCopy)) {
                    config = Object.assign(environment.flags, external);
                    environment.flags = {...config, state: 'DIRTY'};

                } else if (!external) {
                    this.storageService.set(environment.config.storageMap.keychain.flags, environment.flags)
                        .subscribe();
                } else if (!this._compareUnsortedObjects(environment.flags, this.localCopy)) {
                    config = Object.assign(external, {...environment.flags});

                    // @ts-ignore:disable-next-line
                    environment.experimental = {...environment.experimental, state: 'DIRTY'};

                    this.storageService.set(environment.config.storageMap.keychain.flags, config)
                        .subscribe();

                } else {
                    this.storageService.set(environment.config.storageMap.keychain.flags, environment.flags)
                        .subscribe();
                }
            }, error => console.warn(error));
    }

    reset() {
        this.storageService.set(environment.config.storageMap.keychain.flags, this.localCopy)
            .subscribe();
        environment.flags = this.localCopy;
        this.sync();
    }
}
