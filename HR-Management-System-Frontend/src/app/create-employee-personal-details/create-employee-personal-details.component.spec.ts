import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeePersonalDetailsComponent } from './create-employee-personal-details.component';

describe('CreateEmployeePersonalDetailsComponent', () => {
  let component: CreateEmployeePersonalDetailsComponent;
  let fixture: ComponentFixture<CreateEmployeePersonalDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeePersonalDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeePersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
