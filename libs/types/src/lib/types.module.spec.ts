import { async, TestBed } from '@angular/core/testing';
import { TypesModule } from './types.module';

describe('TypesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TypesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TypesModule).toBeDefined();
  });
});
