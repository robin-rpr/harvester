import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderControlsComponent} from './header-controls.component';

describe('HeaderControlsComponent', () => {
    let component: HeaderControlsComponent;
    let fixture: ComponentFixture<HeaderControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderControlsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
