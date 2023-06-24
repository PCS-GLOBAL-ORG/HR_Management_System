import { Component } from '@angular/core';
import { EmployeeEducationDetails } from '../employee-education-details';
import { EmployeeducationdetailsService } from '../employeeducationdetails.service';
import { Router } from '@angular/router';
import { EmployeeeducationdropdownService } from '../employeeeducationdropdown.service';

@Component({
  selector: 'app-create-employee-education-details',
  templateUrl: './create-employee-education-details.component.html',
  styleUrls: ['./create-employee-education-details.component.css']
})
export class CreateEmployeeEducationDetailsComponent {

  ugqualification: any[];
  ugspecialization: any[];
  uguniversity: any[];
  pgqualification: any[];
  pgspecialization: any[];
  pguniversity: any[];
  
  education: EmployeeEducationDetails = new EmployeeEducationDetails();

  constructor(private service: EmployeeducationdetailsService, 
    private router: Router,
    private educationDropdown: EmployeeeducationdropdownService) {}

  ngOnInit(): void {
    this.educationDropdown.getUgQualification().subscribe(
      (data:any) => {
        this.ugqualification=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.educationDropdown.getUgSpecialization().subscribe(
      (data:any) => {
        this.ugspecialization=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.educationDropdown.getUgUniversity().subscribe(
      (data:any) => {
        this.uguniversity=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.educationDropdown.getPgQualification().subscribe(
      (data:any) => {
        this.pgqualification=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.educationDropdown.getPgSpecialization().subscribe(
      (data:any) => {
        this.pgspecialization=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.educationDropdown.getPgUniversity().subscribe(
      (data:any) => {
        this.pguniversity=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );
      
  }

  saveEmployeeEducationDetails(){
    this.service.createEmployeeEducationDetails(this.education).subscribe(data => {
      console.log(data);
       this.employeeOfficeDetails();
    },
    error => console.log(error));
  }

  employeeOfficeDetails() {
    var empId = this.education.employeeId;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['/create-employee-office-details', empId]);
  }

  onSubmit(){
    console.log(this.education)
    this.saveEmployeeEducationDetails();
  }


}
