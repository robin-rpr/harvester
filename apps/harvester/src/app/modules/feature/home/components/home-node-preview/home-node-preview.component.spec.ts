import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeNodePreviewComponent} from './home-node-preview.component';

describe('HomeNodePreviewComponent', () => {
    let component: HomeNodePreviewComponent;
    let fixture: ComponentFixture<HomeNodePreviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeNodePreviewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeNodePreviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
