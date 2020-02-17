import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HookModule} from '../../../../shared/hook/hook.module';
import {FooterComponent} from './footer.component';
import {NavigatorModule} from '../../../../shared/navigator/navigator.module';
import {DropdownModule} from '../../../../shared/dropdown/dropdown.module';
import {ButtonModule} from '../../../../shared/button/button.module';
import {FooterControlsComponent} from "../footer-controls/footer-controls.component";
import {FooterNavigatorComponent} from "../footer-navigator/footer-navigator.component";
import {HomeSidebarComponent} from "../../../../feature/home/components/home-sidebar/home-sidebar.component";
import {HomeIabComponent} from "../../../../feature/home/components/home-iab/home-iab.component";
import {TreeViewModule} from "../../../../shared/tree-view/tree-view.module";

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

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
                FooterComponent,
                FooterControlsComponent,
                FooterNavigatorComponent,
                HomeSidebarComponent,
                HomeIabComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
