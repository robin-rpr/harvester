import {Injectable, InjectionToken} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ModalConfig} from '../models/modal.interface';
import {map, skipWhile} from 'rxjs/operators';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Injectable()
/**
 * ModalService
 */
export class ModalService {

    private configSubject$ = new BehaviorSubject<ModalConfig | undefined>(undefined);
    private visibleSubject$ = new BehaviorSubject<boolean>(false);
    private clickSubject$ = new Subject<string>();

    constructor() {
    }

    get click$() {
        return this.clickSubject$;
    }

    get visible$() {
        return this.visibleSubject$.pipe(map((visibility: boolean) => visibility));
    }

    get config$() {
        return this.configSubject$.pipe(skipWhile(value => value === undefined), map((config: ModalConfig) => config));
    }

    public open(config) {
        return new Observable((observer) => {
            this.close(); // Dispose previous portal
            this.configSubject$.next(config);
            this.visibleSubject$.next(true);
            this.click$.subscribe((id) => observer.next(id), err => {
                throw err;
            });
        });
    }

    public close() {
        this.visibleSubject$.next(false);
    }
}
