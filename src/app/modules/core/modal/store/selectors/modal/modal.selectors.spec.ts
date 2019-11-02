import * as fromReducers from '../../reducers';
import * as fromRoot from '../../../../../../store/reducers';
import * as fromSelectors from './Modal.selectors';
import * as fromActions from '../../actions';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

describe('Modal Selectors', () => {
  let store: Store<fromReducers.IModalState>;

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
