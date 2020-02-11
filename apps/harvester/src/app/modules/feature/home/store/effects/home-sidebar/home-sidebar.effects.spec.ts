import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {Actions} from '@ngrx/effects';
import {Observable, of} from 'rxjs';

import * as fromEffects from './home-sidebar.effects';
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

describe('Home Sidebar Effects', () => {
    let actions$: TestActions;
    let effects: fromEffects.HomeSidebarEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService, fromEffects.HomeSidebarEffects, {provide: Actions, useFactory: getActions}],
        });

        actions$ = TestBed.get(Actions);
        effects = TestBed.get(fromEffects.HomeSidebarEffects);
    });
});
