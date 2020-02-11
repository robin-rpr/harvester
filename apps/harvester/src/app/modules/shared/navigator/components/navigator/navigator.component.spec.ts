import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigatorComponent} from './navigator.component';
import {colorEnums} from '../../../../../enums/color.enums';

describe('ButtonComponent', () => {
    let component: NavigatorComponent;
    let fixture: ComponentFixture<NavigatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavigatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigatorComponent);
        component = fixture.componentInstance;
        component.color = colorEnums.PRIMARY;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
