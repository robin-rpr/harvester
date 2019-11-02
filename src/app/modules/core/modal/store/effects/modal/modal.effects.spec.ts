import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';

import {cold} from 'jasmine-marbles';
import {throwError, Observable, of} from 'rxjs';

import * as fromEffects from './modal.effects';
import * as fromActions from '../../actions/modal/modal.actions';
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

describe('Modal Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.ModalEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService, fromEffects.ModalEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.ModalEffects);
    });
});
