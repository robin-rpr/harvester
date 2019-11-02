import * as fromRouter from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStateUrl } from '../reducers';

export class CustomRouterSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const {url} = routerState;
    const {queryParams} = routerState.root;
    const {params} = state;

    return {url, queryParams, params};
  }
}
