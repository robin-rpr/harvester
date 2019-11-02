import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';

import {cold} from 'jasmine-marbles';
import {throwError, Observable, of} from 'rxjs';

import * as fromEffects from './flags.effects';
import * as fromActions from '../../actions/flags/flags.actions';
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

describe('Flags Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.FlagsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService, fromEffects.FlagsEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.FlagsEffects);
    });
});
