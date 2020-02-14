import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalComponent} from './modal.component';
import {HookModule} from '../../../../shared/hook/hook.module';
import {ModalService} from '../../services/modal.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "../../../../shared/button/button.module";

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                ButtonModule
            ],
            providers: [
                ModalService,
                ModalComponent
            ],
            declarations: [ModalComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
