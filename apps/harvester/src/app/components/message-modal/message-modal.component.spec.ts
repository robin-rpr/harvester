import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageModalComponent} from './message-modal.component';
import {ModalService} from '../../modules/core/modal/services/modal.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MessageModalComponent', () => {
    let component: MessageModalComponent;
    let fixture: ComponentFixture<MessageModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MessageModalComponent],
            providers: [
                ModalService,
                HttpClient,
                HttpHandler
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MessageModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
