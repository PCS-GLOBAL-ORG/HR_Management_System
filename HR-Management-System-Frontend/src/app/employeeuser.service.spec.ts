import { TestBed } from '@angular/core/testing';

import { EmployeeuserService } from './employeeuser.service';

describe('EmployeeuserService', () => {
  let service: EmployeeuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
