import { TestBed } from '@angular/core/testing';

import { EmployeeProfessionalDetailsService } from './employee-professional-details.service';

describe('EmployeeProfessionalDetailsService', () => {
  let service: EmployeeProfessionalDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeProfessionalDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
