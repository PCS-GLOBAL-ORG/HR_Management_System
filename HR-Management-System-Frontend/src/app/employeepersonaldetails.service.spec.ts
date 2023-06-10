import { TestBed } from '@angular/core/testing';

import { EmployeepersonaldetailsService } from './employeepersonaldetails.service';

describe('EmployeepersonaldetailsService', () => {
  let service: EmployeepersonaldetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeepersonaldetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
