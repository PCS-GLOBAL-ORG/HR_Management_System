import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeProfessionalDetailsComponent } from './create-employee-professional-details.component';

describe('CreateEmployeeProfessionalDetailsComponent', () => {
  let component: CreateEmployeeProfessionalDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeeProfessionalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeProfessionalDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeProfessionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
