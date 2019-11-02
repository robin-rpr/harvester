import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';

import {cold} from 'jasmine-marbles';
import {throwError, Observable, of} from 'rxjs';

import * as fromEffects from './offline.effects';
import * as fromActions from '../../actions/offline/offline.actions';
import {AuthService} from "../../../../../../services/auth/auth.service";

export class TestActions extends Actions {
    constructor() {
        super(of());
    }

    set stream(source: Observable<any>) {
        this.source = source;
    }
}

export function getActions() {
    return new TestActions();
}

describe('Offline Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.OfflineEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService, fromEffects.OfflineEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.OfflineEffects);
    });
});
