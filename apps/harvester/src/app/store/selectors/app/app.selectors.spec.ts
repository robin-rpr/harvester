import * as fromReducers from '../../reducers';
import * as fromRoot from '../../reducers';
import {combineReducers, Store, StoreModule} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';

describe('App Selectors', () => {
    let store: Store<fromReducers.IAppState | fromReducers.IAppRouterState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.appReducer,
                    ...fromRoot.routerReducer,
                    conditions: combineReducers(fromReducers.appReducer),
                }),
            ],
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });
});
