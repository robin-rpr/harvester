import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterIntelliComponent} from './footer-intelli.component';
import {HookModule} from '../../../../shared/hook/hook.module';
import {NavigatorModule} from '../../../../shared/navigator/navigator.module';
import {DropdownModule} from '../../../../shared/dropdown/dropdown.module';
import {ButtonModule} from '../../../../shared/button/button.module';

describe('FooterNavigatorComponent', () => {
    let component: FooterIntelliComponent;
    let fixture: ComponentFixture<FooterIntelliComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                HookModule,
                NavigatorModule,
                DropdownModule,
            ],
            declarations: [FooterIntelliComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterIntelliComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
