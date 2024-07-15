import { TestBed } from '@angular/core/testing';

import { ViewCounterService } from './view-counter.service';

describe('ViewCounterService', () => {
  let service: ViewCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
