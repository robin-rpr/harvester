import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsTabComponent} from './tabs-tab.component';

describe('TabsTabComponent', () => {
    let component: TabsTabComponent;
    let fixture: ComponentFixture<TabsTabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TabsTabComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
