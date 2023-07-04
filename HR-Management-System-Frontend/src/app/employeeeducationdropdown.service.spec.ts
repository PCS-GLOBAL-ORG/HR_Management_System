import { TestBed } from '@angular/core/testing';

import { EmployeeeducationdropdownService } from './employeeeducationdropdown.service';

describe('EmployeeeducationdropdownService', () => {
  let service: EmployeeeducationdropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeeducationdropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
