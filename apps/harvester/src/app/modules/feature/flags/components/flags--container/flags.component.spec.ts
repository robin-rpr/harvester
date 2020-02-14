import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlagsComponent} from './flags.component';
import {APP_BASE_HREF, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FlagsService} from '../../services/flags/flags.service';
import {ButtonModule} from "../../../../shared/button/button.module";
import {ModalService} from "../../../../core/modal/services/modal.service";
import {PwaService} from "../../../../../services/pwa/pwa.service";
import {ServiceWorkerModule} from '@angular/service-worker';

describe('FlagsComponent', () => {
    let component: FlagsComponent;
    let fixture: ComponentFixture<FlagsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ServiceWorkerModule.register('', {enabled: false}),
                ButtonModule
            ],
            providers: [
                Location,
                {provide: LocationStrategy, useClass: PathLocationStrategy},
                {provide: APP_BASE_HREF, useValue: '/'},
                FlagsService,
                ModalService,
                PwaService
            ],
            declarations: [FlagsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
