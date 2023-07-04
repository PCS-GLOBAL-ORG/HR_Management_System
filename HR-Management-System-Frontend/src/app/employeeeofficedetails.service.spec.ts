import { TestBed } from '@angular/core/testing';

import { EmployeeeofficedetailsService } from './employeeeofficedetails.service';

describe('EmployeeeofficedetailsService', () => {
  let service: EmployeeeofficedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeeofficedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
