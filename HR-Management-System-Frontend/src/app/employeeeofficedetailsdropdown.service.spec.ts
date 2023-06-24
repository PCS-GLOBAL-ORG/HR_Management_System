import { TestBed } from '@angular/core/testing';

import { EmployeeeofficedetailsdropdownService } from './employeeeofficedetailsdropdown.service';

describe('EmployeeeofficedetailsdropdownService', () => {
  let service: EmployeeeofficedetailsdropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeeofficedetailsdropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
