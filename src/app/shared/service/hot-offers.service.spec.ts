import { TestBed } from '@angular/core/testing';

import { HotOffersService } from './hot-offers.service';

describe('HotOffersService', () => {
  let service: HotOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
