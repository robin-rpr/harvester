import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TreeViewComponent} from './tree-view.component';
import {TreeNodeComponent} from "../tree-node/tree-node.component";
import {NodeUtils} from "../../utils/node.utils";

describe('TreeViewComponent', () => {
    let component: TreeViewComponent;
    let fixture: ComponentFixture<TreeViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                NodeUtils
            ],
            declarations: [
                TreeViewComponent,
                TreeNodeComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TreeViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
