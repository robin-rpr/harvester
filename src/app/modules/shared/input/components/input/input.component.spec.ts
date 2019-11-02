import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormBuilder } from '@angular/forms';
import {InputComponent} from './input.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

describe('InputComponent', () => {
    let component: InputComponent;
    let fixture: ComponentFixture<InputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [InputComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputComponent);
        component = fixture.componentInstance;
        component.group = new FormBuilder().group({
            'input': ['', [Validators.required, Validators.pattern(/(?:^|(?:\/))(?=\S*['-])([a-zA-Z'-]+)(?=$)/)]]
        });
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
