import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeOfficeDetailsComponent } from './create-employee-office-details.component';

describe('CreateEmployeeOfficeDetailsComponent', () => {
  let component: CreateEmployeeOfficeDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeeOfficeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeOfficeDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeOfficeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
