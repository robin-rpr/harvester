import * as fromReducers from '../../reducers';
import * as fromRoot from '../../../../../../store/reducers';
import {combineReducers, Store, StoreModule} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';

describe('Footer Selectors', () => {
    let store: Store<fromReducers.IFooterState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({
                    ...fromRoot.reducer,
                    conditions: combineReducers(fromReducers.reducers),
                }),
            ],
        });
        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
    });
});