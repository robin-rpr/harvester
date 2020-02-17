import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromActions from '../../actions/app/app.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AppService} from "../../../services/app/app.service";
import {ITreeNode} from "../../../modules/shared/tree-view/models/tree-node.model";


@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private appService: AppService
    ) {
    }

    @Effect()
    loadAppNodes$ = this.actions$.pipe(
        ofType(fromActions.LOAD_APP_NODES),
        switchMap((action: fromActions.LoadAppNodes) => {
            return this.appService.getTreeNodes().pipe(
                map((res: ITreeNode) => new fromActions.LoadAppNodesSuccess(res)),
                catchError(error => [
                    new fromActions.LoadAppNodesFail(error),
                    console.log(error)
                ]),
            );
        }),
    );
}
