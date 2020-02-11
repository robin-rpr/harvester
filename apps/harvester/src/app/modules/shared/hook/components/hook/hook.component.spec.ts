import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HookComponent} from './hook.component';
import {colorEnums} from '../../../../../enums/color.enums';

describe('ButtonComponent', () => {
    let component: HookComponent;
    let fixture: ComponentFixture<HookComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HookComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HookComponent);
        component = fixture.componentInstance;
        component.color = colorEnums.PRIMARY;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
