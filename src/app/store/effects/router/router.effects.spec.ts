import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';

import {cold} from 'jasmine-marbles';
import {throwError, Observable, of} from 'rxjs';

import * as fromEffects from './router.effects';
import * as fromActions from '../../actions/router/router.actions';

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

describe('Router Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.RouterEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [fromEffects.RouterEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.RouterEffects);
    });
});
