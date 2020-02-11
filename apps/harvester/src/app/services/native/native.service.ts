import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

/**
 * Native Window Reference Service
 */
export class NativeService {

    constructor() {
    }

    /**
     * Get Native Window
     *
     * @return Native Window Object
     */
    get nativeWindow(): any {
        return window;
    }

    /**
     * Get Native Navigator
     *
     * @return Native Navigator Object
     */
    get nativeNavigator(): any {
        return navigator;
    }
}
