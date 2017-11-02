import { TestBed, inject } from '@angular/core/testing';

import { FundRaisingService } from './fund-raising.service';

describe('FundRaisingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundRaisingService]
    });
  });

  it('should be created', inject([FundRaisingService], (service: FundRaisingService) => {
    expect(service).toBeTruthy();
  }));
});
