import { TestBed, inject } from '@angular/core/testing';

import { RegistrationService } from './registration-service.service';

describe('RegistrationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationService]
    });
  });

  it('should be created', inject([RegistrationService], (service: RegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
