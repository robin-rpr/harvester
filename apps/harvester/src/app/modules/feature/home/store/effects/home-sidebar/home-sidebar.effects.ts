import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {TelemetryService} from '../../../../../../services/telemetry/telemetry.service';

@Injectable()
export class HomeSidebarEffects {
    constructor(private actions$: Actions,
                private telemetryService: TelemetryService) {

        /*
        @Effect()
          selectHomeSidebarNode$ = this.actions$.pipe(
              ofType(fromActions.SELECT_HOME_SIDEBAR_NODE),
              switchMap((action: fromActions.SelectHomeSidebarNode) => {
                return this.telemetryService.push({ action: action.type, payload: action.payload}).pipe(
                    map((res: unknown) => new fromActions.SelectHomeSidebarNodeSuccess()),
                    catchError(error => [
                      new ecardSendActions.LoadScopeChoicesFail(error),
                      new coreActions.AddErrorMessage({ message: 'ERROR_GENERIC' }),
                    ]),
                );
              }),
          );*/
    }
}
