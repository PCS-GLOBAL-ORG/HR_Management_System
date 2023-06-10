import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeePersonalDetailsComponent } from './update-employee-personal-details.component';

describe('UpdateEmployeePersonalDetailsComponent', () => {
  let component: UpdateEmployeePersonalDetailsComponent;
  let fixture: ComponentFixture<UpdateEmployeePersonalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeePersonalDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeePersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
