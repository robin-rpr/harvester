import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeSidebarComponent} from './home-sidebar.component';
import {TreeViewModule} from "../../../../shared/tree-view/tree-view.module";

describe('HomeSidebarComponent', () => {
    let component: HomeSidebarComponent;
    let fixture: ComponentFixture<HomeSidebarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TreeViewModule
            ],
            declarations: [HomeSidebarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
