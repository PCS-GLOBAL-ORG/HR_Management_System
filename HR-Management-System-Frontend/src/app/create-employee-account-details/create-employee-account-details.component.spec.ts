import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeAccountDetailsComponent } from './create-employee-account-details.component';

describe('CreateEmployeeAccountDetailsComponent', () => {
  let component: CreateEmployeeAccountDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeeAccountDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeAccountDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
