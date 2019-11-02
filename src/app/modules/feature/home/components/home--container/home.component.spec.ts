import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {ButtonModule} from '../../../../shared/button/button.module';
import {TimemachineService} from '../../../../../services/timemachine/timemachine.service';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router, RouterModule} from '@angular/router';
import {WinRefService} from '../../../../../services/win-ref/win-ref.service';
import {ModalService} from '../../../../core/modal/services/modal.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppRoutingModule} from '../../../../../app-routing.module';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ButtonModule,
                AppRoutingModule,
                ServiceWorkerModule.register('', {enabled: false})
            ],
            providers: [
                TimemachineService,
                AuthService,
                PwaService,
                WinRefService,
                ModalService,
                HttpClient,
                HttpHandler,
                { provide: LocationStrategy, useClass: PathLocationStrategy },
                { provide: APP_BASE_HREF, useValue: '/'},
                SwUpdate
            ],
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
