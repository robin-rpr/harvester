import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as RouterActions from '../../actions/router/router.actions';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path as string[], { queryParams, ...extras });
    }),
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActions.BACK),
    tap(() => this.location.back()),
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActions.FORWARD),
    tap(() => this.location.forward()),
  );

  @Effect({ dispatch: false })
  externalRedirect$ = this.actions$.pipe(
    ofType(RouterActions.REDIRECT),
    map((action: RouterActions.Redirect) => action.payload),
    tap(({ path, timeout }) => {
      setTimeout(() => (window.location.href = path), timeout);
    }),
  );
}
