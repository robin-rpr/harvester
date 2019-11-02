import * as fromActions from './home.actions';

describe('Home Actions', () => {

  describe('CLEAR_HOME_STATE', () => {
    it('should create an action', () => {
      const action = new fromActions.ClearHomeState();
      expect({ ...action }).toEqual({ type: fromActions.CLEAR_HOME_STATE });
    });
  });

});
