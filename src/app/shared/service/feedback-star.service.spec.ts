import { TestBed } from '@angular/core/testing';

import { FeedbackStarService } from './feedback-star.service';

describe('FeedbackStarService', () => {
  let service: FeedbackStarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackStarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
