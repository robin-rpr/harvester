import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {Router, RouterModule} from '@angular/router';
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
                AppRoutingModule,
                ServiceWorkerModule.register('', {enabled: false})
            ],
            providers: [
                AuthService,
                PwaService,
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
