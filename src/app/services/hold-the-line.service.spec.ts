import { TestBed } from '@angular/core/testing';

import { HoldTheLineService } from './hold-the-line.service';

describe('HoldTheLineService', () => {
  let service: HoldTheLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldTheLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
