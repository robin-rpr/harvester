import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';
import {Observable, of} from 'rxjs';

import * as fromEffects from './home.effects';
import {AuthService} from '../../../../../../services/auth/auth.service';

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

describe('Home Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.HomeEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService, fromEffects.HomeEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.HomeEffects);
    });
});
