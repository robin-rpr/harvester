import {Action} from '@ngrx/store';
import {NavigationExtras} from '@angular/router';

export const GO = '[ROUTER] Go';
export const BACK = '[ROUTER] Back';
export const FORWARD = '[ROUTER] Forward';
export const REDIRECT = '[ROUTER] Redirect';

export class Go implements Action {
    readonly type = GO;

    constructor(
        public payload: {
            path: string[];
            query?: object;
            extras?: NavigationExtras;
        },
    ) {
    }
}

export class Redirect implements Action {
    readonly type = REDIRECT;

    constructor(
        public payload: {
            path: string;
            timeout?: number;
        },
    ) {
    }
}

export class Back implements Action {
    readonly type = BACK;
}

export class Forward implements Action {
    readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;
