import * as fromFeature from '../reducers';
import * as fromEcardSend from '../reducers/home.reducer';
import { createSelector } from '@ngrx/store';

export const selectEcardSendState = createSelector(
  fromFeature.getEcardSendFeatureState,
  (state: fromFeature.EcardSendState) => state.ecardSend,
);

export const selectEcardSendLoading = createSelector(
  selectEcardSendState,
  fromEcardSend.getEcardSendLoading,
);

export const selectEcardSendLoaded = createSelector(
  selectEcardSendState,
  fromEcardSend.getEcardSendLoaded,
);
