import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderControlsComponent} from './header-controls.component';
import {ButtonModule} from "../../../../shared/button/button.module";
import {HookModule} from "../../../../shared/hook/hook.module";
import {NavigatorModule} from "../../../../shared/navigator/navigator.module";
import {DropdownModule} from "../../../../shared/dropdown/dropdown.module";

describe('HeaderControlsComponent', () => {
    let component: HeaderControlsComponent;
    let fixture: ComponentFixture<HeaderControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                HookModule,
                NavigatorModule,
                DropdownModule
            ],
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
