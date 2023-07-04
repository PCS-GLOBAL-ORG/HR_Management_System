import { TestBed } from '@angular/core/testing';

import { LocationdropdownService } from './locationdropdown.service';

describe('LocationdropdownService', () => {
  let service: LocationdropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationdropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
