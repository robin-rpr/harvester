import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { cold, hot } from 'jasmine-marbles';

import {Actions} from '@ngrx/effects';
import {Observable, of, throwError as observableThrowError} from 'rxjs';

import * as fromEffects from './app.effects';
import * as fromActions from './../../actions/app/app.actions'
import {AuthService} from '../../../../../../services/auth/auth.service';
import {TreeNodeFactory} from "../../../../../shared/tree-view/models/tree-node.model";
import {AppService} from "../../../services/app/app.service";

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

describe('App Effects', () => {
    const service: AppService = TestBed.get(AppService);
    const actions$: TestActions = TestBed.get(Actions);
    const effects: fromEffects.AppEffects = TestBed.get(fromEffects.AppEffects);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService,
                AppService,
                fromEffects.AppEffects,
                {provide: Actions, useFactory: getActions}
            ],
        });
    });

    describe('loadTreeNodes$', () => {
        it('should switch map to success', () => {
            const res = new TreeNodeFactory().mockResponse;
            spyOn(service, 'getTreeNodes').and.returnValue(of(res));

            const action = new fromActions.LoadAppNodes();
            const completion = new fromActions.LoadAppNodesSuccess(res);

            actions$.stream = hot('-a', {a: action});
            const expected = cold('-b', {b: completion});
            expect(effects.loadAppNodes$).toBeObservable(expected);
        });

        it('should switch map to fail', () => {
            const error = new HttpErrorResponse({});
            spyOn(service, 'getTreeNodes').and.returnValue(observableThrowError(error));

            const action = new fromActions.LoadAppNodes();
            const completion = [
                new fromActions.LoadAppNodesFail(error),
            ];

            actions$.stream = hot('-a', {a: action});
            const expected = cold('-b', {b: completion[0]});
            expect(effects.loadAppNodes$).toBeObservable(expected);
        });
    });
});
