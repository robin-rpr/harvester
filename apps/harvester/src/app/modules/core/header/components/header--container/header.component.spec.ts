import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HookModule} from '../../../../shared/hook/hook.module';
import {HeaderComponent} from './header.component';
import {NavigatorModule} from '../../../../shared/navigator/navigator.module';
import {DropdownModule} from '../../../../shared/dropdown/dropdown.module';
import {ButtonModule} from '../../../../shared/button/button.module';
import {HeaderControlsComponent} from "../header-controls/header-controls.component";
import {HeaderNavigatorComponent} from "../header-navigator/header-navigator.component";
import {HomeSidebarComponent} from "../../../../feature/home/components/home-sidebar/home-sidebar.component";
import {HomeIabComponent} from "../../../../feature/home/components/home-iab/home-iab.component";
import {TreeViewModule} from "../../../../shared/tree-view/tree-view.module";

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                HookModule,
                NavigatorModule,
                DropdownModule,
                TreeViewModule
            ],
            declarations: [
                HeaderComponent,
                HeaderControlsComponent,
                HeaderNavigatorComponent,
                HomeSidebarComponent,
                HomeIabComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
