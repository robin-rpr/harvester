import * as fromRouter from './router.actions';

describe('Router Actions', () => {

  describe('Navigation Actions', () => {
    describe('Go', () => {
      it('should create an action', () => {
        const payload = {path: []};
        const action = new fromRouter.Go(payload);
        expect({...action}).toEqual({type: fromRouter.GO, payload});
      });
    });

    describe('Redirect', () => {
      it('should create an action', () => {
        const payload = {path: 'https://harvester.dev'};
        const action = new fromRouter.Redirect(payload);
        expect({...action}).toEqual({type: fromRouter.REDIRECT, payload});
      });
    });


    describe('Back', () => {
      it('should create an action', () => {
        const action = new fromRouter.Back();
        expect({...action}).toEqual({type: fromRouter.BACK});
      });
    });

    describe('Forward', () => {
      it('should create an action', () => {
        const action = new fromRouter.Forward();
        expect({...action}).toEqual({type: fromRouter.FORWARD});
      });
    });
  });

});
