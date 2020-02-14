import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeGroupComponent} from './home-group.component';
import {HomeService} from "../../services/home/home.service";

describe('HomeGroupComponent', () => {
    let component: HomeGroupComponent;
    let fixture: ComponentFixture<HomeGroupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                HomeService
            ],
            declarations: [HomeGroupComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
