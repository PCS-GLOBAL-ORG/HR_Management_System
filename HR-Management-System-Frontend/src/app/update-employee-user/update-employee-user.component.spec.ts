import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeUserComponent } from './update-employee-user.component';

describe('UpdateEmployeeUserComponent', () => {
  let component: UpdateEmployeeUserComponent;
  let fixture: ComponentFixture<UpdateEmployeeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeUserComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
