import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageModalComponent } from './message-modal.component';
import {ModalService} from '../../modules/core/modal/services/modal.service';
import {GiphyService} from '../../services/giphy/giphy.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('MessageModalComponent', () => {
  let component: MessageModalComponent;
  let fixture: ComponentFixture<MessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageModalComponent ],
      providers: [
          ModalService,
          GiphyService,
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
