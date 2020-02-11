import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIabComponent } from './home-iab.component';

describe('HomeIabComponent', () => {
  let component: HomeIabComponent;
  let fixture: ComponentFixture<HomeIabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
