import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeUserComponent } from './create-employee-user.component';

describe('CreateEmployeeUserComponent', () => {
  let component: CreateEmployeeUserComponent;
  let fixture: ComponentFixture<CreateEmployeeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeUserComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
