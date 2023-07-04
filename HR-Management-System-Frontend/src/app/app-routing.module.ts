import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeUserComponent } from './create-employee-user/create-employee-user.component';
import { EmployeePersonalDetailsComponent } from './employee-personal-details-list/employee-personal-details.component';
import { UpdateEmployeeUserComponent } from './update-employee-user/update-employee-user.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CreateEmployeePersonalDetailsComponent } from './create-employee-personal-details/create-employee-personal-details.component';
import { UpdateEmployeePersonalDetailsComponent } from './update-employee-personal-details/update-employee-personal-details.component';
import { EmployeeEducationDetailsListComponent } from './employee-education-details-list/employee-education-details-list.component';
import { CreateEmployeeEducationDetailsComponent } from './create-employee-education-details/create-employee-education-details.component';
import { CreateEmployeeOfficeDetailsComponent } from './create-employee-office-details/create-employee-office-details.component';
import { CreateEmployeeProfessionalDetailsComponent } from './create-employee-professional-details/create-employee-professional-details.component';
import { CreateEmployeeAccountDetailsComponent } from './create-employee-account-details/create-employee-account-details.component';
import { CreateEmployeeJobDetailsComponent } from './create-employee-job-details/create-employee-job-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'update-user-employee/:userId', component: UpdateEmployeeUserComponent},
  {path: 'create-employee-user', component: CreateEmployeeUserComponent},
  {path: 'view-employee-user/:userId', component: ViewEmployeeComponent},
  {path: 'employee-personal-details', component: EmployeePersonalDetailsComponent},
  {path: 'create-employee-personal-details/:empId', component: CreateEmployeePersonalDetailsComponent},
  {path: 'update-employee-personal-details/:userId', component: UpdateEmployeePersonalDetailsComponent},
  {path: 'employee-education-details', component: EmployeeEducationDetailsListComponent},
  {path: 'create-employee-education-details/:empId', component: CreateEmployeeEducationDetailsComponent},
  {path: 'create-employee-office-details/:empId', component: CreateEmployeeOfficeDetailsComponent},
  {path: 'create-employee-professional-details/:empId', component: CreateEmployeeProfessionalDetailsComponent},
  {path: 'create-employee-account-details/:empId', component: CreateEmployeeAccountDetailsComponent},
  {path: 'create-employee-Job-details/:empId', component: CreateEmployeeJobDetailsComponent}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
