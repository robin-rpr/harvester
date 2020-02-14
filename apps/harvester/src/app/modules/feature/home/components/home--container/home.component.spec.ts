import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HomeComponent} from './home.component';
import {AuthService} from '../../../../../services/auth/auth.service';
import {PwaService} from '../../../../../services/pwa/pwa.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppRoutingModule} from '../../../../../app-routing.module';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';
import {HomeService} from "../../services/home/home.service";
import {HomeSidebarComponent} from "../home-sidebar/home-sidebar.component";
import {HomeIabComponent} from "../home-iab/home-iab.component";
import {ModalService} from "../../../../core/modal/services/modal.service";

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
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue: '/'},
                SwUpdate,
                HomeService,
                ModalService
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],
            declarations: [
                HomeComponent,
                HomeSidebarComponent,
                HomeIabComponent,
            ]
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
