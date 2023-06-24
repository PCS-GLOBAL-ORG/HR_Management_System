import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeUserComponent } from './update-employee-user/update-employee-user.component';
import { CreateEmployeeUserComponent } from './create-employee-user/create-employee-user.component';
import { EmployeePersonalDetailsComponent } from './employee-personal-details/employee-personal-details.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CreateEmployeePersonalDetailsComponent } from './create-employee-personal-details/create-employee-personal-details.component';
import { UpdateEmployeePersonalDetailsComponent } from './update-employee-personal-details/update-employee-personal-details.component';
import { CreateEmployeeEducationDetailsComponent } from './create-employee-education-details/create-employee-education-details.component';
import { EmployeeEducationDetailsListComponent } from './employee-education-details-list/employee-education-details-list.component';
import { CreateEmployeeOfficeDetailsComponent } from './create-employee-office-details/create-employee-office-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    UpdateEmployeeUserComponent,
    CreateEmployeeUserComponent,
    EmployeePersonalDetailsComponent,
    ViewEmployeeComponent,
    CreateEmployeePersonalDetailsComponent,
    UpdateEmployeePersonalDetailsComponent,
    EmployeeEducationDetailsListComponent,
    CreateEmployeeEducationDetailsComponent,
    CreateEmployeeOfficeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    DropDownListModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
