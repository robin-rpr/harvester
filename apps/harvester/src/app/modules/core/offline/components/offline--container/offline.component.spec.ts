import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OfflineComponent} from './offline.component';
import {HookModule} from '../../../../shared/hook/hook.module';

describe('OfflineComponent', () => {
    let component: OfflineComponent;
    let fixture: ComponentFixture<OfflineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HookModule],
            declarations: [OfflineComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OfflineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
