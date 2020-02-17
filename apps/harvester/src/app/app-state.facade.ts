import {Store, select} from '@ngrx/store';
import {Injectable} from '@angular/core';
import * as fromStore from './store';
import {Observable} from 'rxjs';
import {ITreeNode} from "./modules/shared/tree-view/models/tree-node.model";

@Injectable()
export class AppStateFacade {
    constructor(private store: Store<unknown>) {
    }

    public get selectNodes$(): Observable<ITreeNode[]> {
        return this.store.pipe(select(fromStore.selectAppNodes))
    }

    public get selectSelectedNodes$(): Observable<string[]> {
        return this.store.pipe(select(fromStore.selectAppSelectedNodes));
    }

    public selectAppNode(payload: string[]): void {
        this.store.dispatch(new fromStore.SelectAppNode(payload));
    }

    public loadAppNodes(): void {
        this.store.dispatch(new fromStore.LoadAppNodes());
    }
}
