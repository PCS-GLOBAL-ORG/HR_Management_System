import { Component, OnInit } from '@angular/core';
import { Employeeuser } from '../employeeuser';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeuserService } from '../employeeuser.service';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { EmployeeAccountDetailsService } from '../employee-account-details.service';
import { EmployeeducationdetailsService } from '../employeeducationdetails.service';
import { EmployeeeofficedetailsService } from '../employeeeofficedetails.service';
import { EmployeeProfessionalDetailsService } from '../employee-professional-details.service';
import { EmployeeJobDetailsService } from '../employee-job-details.service';
import { EmployeeAccountDetails } from '../employee-account-details';
import { EmployeeEducationDetails } from '../employee-education-details';
import { EmployeeOfficeDetails } from '../employee-office-details';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { EmployeeProfessionalDetails } from '../employee-professional-details';
import { EmployeeJobDetails } from '../employee-job-details';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{


  userId: number;
  employee: Employeeuser
  account : EmployeeAccountDetails
  education : EmployeeEducationDetails
  office : EmployeeOfficeDetails
  personal : EmployeePersonalDetails
  professional : EmployeeProfessionalDetails
  assignJob : EmployeeJobDetails

  employee1: Employeeuser[]
  account1 : EmployeeAccountDetails[]
  education1 : EmployeeEducationDetails[]
  office1 : EmployeeOfficeDetails[]
  personal1 : EmployeePersonalDetails[]
  professional1 : EmployeeProfessionalDetails[]
  assignJob1 : EmployeeJobDetails[]
  
  constructor(private route: ActivatedRoute,
    private router : Router,
    private employeeService : EmployeeuserService,
    private accountService : EmployeeAccountDetailsService,
    private educationService : EmployeeducationdetailsService,
    private officeService : EmployeeeofficedetailsService,
    private personalService : EmployeepersonaldetailsService,
    private professionalService : EmployeeProfessionalDetailsService,
    private assignJobService : EmployeeJobDetailsService) {}


    ngOnInit(): void {
      this.userId = this.route.snapshot.params['userId'];
      
      this.employee = new Employeeuser();
      this.employeeService.getEmployeeById(this.userId).subscribe(data => {
        this.employee = data;
      })

      this.account = new EmployeeAccountDetails();
      this.accountService.getEmployeeAccountDetailsById(this.userId).subscribe(data => {
        this.account = data;
      })

      this.education = new EmployeeEducationDetails();
      this.educationService.getEmployeeDetailsById(this.userId).subscribe(data => {
        this.education = data;
      })

      this.office = new EmployeeOfficeDetails();
      this.officeService.getEmployeeOfficeDetailsById(this.userId).subscribe(data => {
        this.office = data;
      })

      this.personal = new EmployeePersonalDetails();
      this.personalService.getEmployeeDetailsById(this.userId).subscribe(data => {
        this.personal = data;
      })

      this.professional = new EmployeeProfessionalDetails();
      this.professionalService.getEmployeeDetailsById(this.userId).subscribe(data => {
        this.professional = data;
      })

      this.assignJob = new EmployeeJobDetails();
      this.assignJobService.getEmployeeJobById(this.userId).subscribe(data => {
        this.assignJob = data;
      })

    }

    updateEmployeeUser(userId: number){
      this.router.navigate(['update-user-employee', userId]);
    }

}
