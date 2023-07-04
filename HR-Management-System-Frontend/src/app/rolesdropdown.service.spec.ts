import { TestBed } from '@angular/core/testing';

import { RolesdropdownService } from './rolesdropdown.service';

describe('RolesdropdownService', () => {
  let service: RolesdropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesdropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
