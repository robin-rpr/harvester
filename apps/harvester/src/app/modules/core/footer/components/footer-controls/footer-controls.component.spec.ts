import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterControlsComponent} from './footer-controls.component';
import {ButtonModule} from "../../../../shared/button/button.module";
import {HookModule} from "../../../../shared/hook/hook.module";
import {NavigatorModule} from "../../../../shared/navigator/navigator.module";
import {DropdownModule} from "../../../../shared/dropdown/dropdown.module";

describe('FooterControlsComponent', () => {
    let component: FooterControlsComponent;
    let fixture: ComponentFixture<FooterControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                HookModule,
                NavigatorModule,
                DropdownModule
            ],
            declarations: [FooterControlsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
