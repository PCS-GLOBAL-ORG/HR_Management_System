import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeProfessionalDetailsComponent } from './employee-professional-details.component';

describe('EmployeeProfessionalDetailsComponent', () => {
  let component: EmployeeProfessionalDetailsComponent;
  let fixture: ComponentFixture<EmployeeProfessionalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeProfessionalDetailsComponent]
    });
    fixture = TestBed.createComponent(EmployeeProfessionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
