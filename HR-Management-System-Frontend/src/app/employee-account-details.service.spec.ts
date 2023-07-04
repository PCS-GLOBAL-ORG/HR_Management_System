import { TestBed } from '@angular/core/testing';

import { EmployeeAccountDetailsService } from './employee-account-details.service';

describe('EmployeeAccountDetailsService', () => {
  let service: EmployeeAccountDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAccountDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
