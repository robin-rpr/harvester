import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeNodeComponent} from './home-node.component';
import {HomeNodeConfigComponent} from "../home-node-config/home-node-config.component";
import {TabsTabComponent} from "../../../../shared/tabs/components/tabs-tab/tabs-tab.component";
import {HomeNodePreviewComponent} from "../home-node-preview/home-node-preview.component";
import {TabsComponent} from "../../../../shared/tabs/components/tabs/tabs.component";
import {HomeService} from "../../services/home/home.service";

describe('HomeNodeComponent', () => {
    let component: HomeNodeComponent;
    let fixture: ComponentFixture<HomeNodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                HomeService
            ],
            declarations: [
                HomeNodeComponent,
                HomeNodeConfigComponent,
                TabsTabComponent,
                HomeNodePreviewComponent,
                HomeNodeConfigComponent,
                TabsComponent
            ]
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
