import * as fromReducers from '../../reducers';
import * as fromRoot from '../../../../../../store/reducers';
import * as fromSelectors from './home.selectors';
import * as fromActions from '../../actions';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

describe('Home Selectors', () => {
  let store: Store<fromReducers.IHomeState>;

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
