import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderNavigatorComponent} from './header-navigator.component';
import {HookModule} from '../../../../shared/hook/hook.module';
import {NavigatorModule} from '../../../../shared/navigator/navigator.module';
import {DropdownModule} from '../../../../shared/dropdown/dropdown.module';
import {ButtonModule} from '../../../../shared/button/button.module';

describe('HeaderNavigatorComponent', () => {
    let component: HeaderNavigatorComponent;
    let fixture: ComponentFixture<HeaderNavigatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                HookModule,
                NavigatorModule,
                DropdownModule,
            ],
            declarations: [HeaderNavigatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderNavigatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
