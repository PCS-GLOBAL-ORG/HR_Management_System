import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEducationDetailsListComponent } from './employee-education-details-list.component';

describe('EmployeeEducationDetailsListComponent', () => {
  let component: EmployeeEducationDetailsListComponent;
  let fixture: ComponentFixture<EmployeeEducationDetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeEducationDetailsListComponent]
    });
    fixture = TestBed.createComponent(EmployeeEducationDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
