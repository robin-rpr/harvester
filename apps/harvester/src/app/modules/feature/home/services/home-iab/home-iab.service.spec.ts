import { TestBed } from '@angular/core/testing';

import { HomeIabService } from './home-iab.service';

describe('HomeIabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeIabService = TestBed.get(HomeIabService);
    expect(service).toBeTruthy();
  });
});
