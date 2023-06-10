import { TestBed } from '@angular/core/testing';

import { EmployeeducationdetailsService } from './employeeducationdetails.service';

describe('EmployeeducationdetailsService', () => {
  let service: EmployeeducationdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeducationdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
