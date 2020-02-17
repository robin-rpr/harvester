import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as fromActions from '../../actions/home-sidebar/home-sidebar.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HomeSidebarService} from "../../../services/home-sidebar/home-sidebar.service";
import {ITreeNode} from "../../../../../shared/tree-view/models/tree-node.model";


@Injectable()
export class HomeSidebarEffects {
    constructor(
        private actions$: Actions,
    ) {
    }
}
