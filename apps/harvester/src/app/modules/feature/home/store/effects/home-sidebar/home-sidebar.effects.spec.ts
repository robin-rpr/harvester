import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { cold, hot } from 'jasmine-marbles';

import {Actions} from '@ngrx/effects';
import {Observable, of, throwError as observableThrowError} from 'rxjs';

import * as fromEffects from './home-sidebar.effects';
import * as fromActions from './../../actions/home-sidebar/home-sidebar.actions'
import {AuthService} from '../../../../../../services/auth/auth.service';
import {TreeNodeFactory} from "../../../../../shared/tree-view/models/tree-node.model";
import {HomeSidebarService} from "../../../services/home-sidebar/home-sidebar.service";

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
    const service: HomeSidebarService = TestBed.get(HomeSidebarService);
    const actions$: TestActions = TestBed.get(Actions);
    const effects: fromEffects.HomeSidebarEffects = TestBed.get(fromEffects.HomeSidebarEffects);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService,
                HomeSidebarService,
                fromEffects.HomeSidebarEffects,
                {provide: Actions, useFactory: getActions}
            ],
        });
    });
});
