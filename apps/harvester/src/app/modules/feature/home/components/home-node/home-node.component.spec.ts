import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeNodeComponent} from './home-node.component';

describe('HomeNodeComponent', () => {
    let component: HomeNodeComponent;
    let fixture: ComponentFixture<HomeNodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeNodeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
