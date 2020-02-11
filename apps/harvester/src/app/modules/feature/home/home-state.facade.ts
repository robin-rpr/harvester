import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import * as fromStore from './store';
import {Observable} from 'rxjs';
import {ITreeNode} from '../../shared/tree-view/models/tree-node.interface';
import {IHomeSidebarState} from './store/reducers/home-sidebar/home-sidebar.reducer';
import {IHomeState} from './store/reducers/home/home.reducer';

@Injectable()
export class HomeStateFacade {
    constructor(private store: Store<fromStore.IHomeState | fromStore.IHomeSidebarState>) {
    }

    get selectHomeSidebarState$(): Observable<IHomeSidebarState> {
        return this.store.select(fromStore.selectHomeSidebarState);
    }

    get selectHomeState$(): Observable<IHomeState> {
        return this.store.select(fromStore.selectHomeState);
    }

    public clearHomeState(): void {
        this.store.dispatch(new fromStore.ClearHomeState());
    }

    public clearHomeSidebarState(): void {
        this.store.dispatch(new fromStore.ClearHomeSidebarState());
    }

    public selectHomeSidebarNode(payload: ITreeNode[]): void {
        this.store.dispatch(new fromStore.SelectHomeSidebarNode(payload));
    }
}
