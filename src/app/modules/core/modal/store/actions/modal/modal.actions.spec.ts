import * as fromActions from './modal.actions';

describe('Modal Actions', () => {

  describe('CLEAR_MODAL_STATE', () => {
    it('should create an action', () => {
      const action = new fromActions.ClearModalState();
      expect({ ...action }).toEqual({ type: fromActions.CLEAR_MODAL_STATE });
    });
  });

});
