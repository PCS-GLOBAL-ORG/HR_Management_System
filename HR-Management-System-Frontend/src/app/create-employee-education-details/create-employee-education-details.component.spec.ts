import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeEducationDetailsComponent } from './create-employee-education-details.component';

describe('CreateEmployeeEducationDetailsComponent', () => {
  let component: CreateEmployeeEducationDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeeEducationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeEducationDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeEducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
