import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeJobDetailsComponent } from './create-employee-job-details.component';

describe('CreateEmployeeJobDetailsComponent', () => {
  let component: CreateEmployeeJobDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeeJobDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeJobDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
