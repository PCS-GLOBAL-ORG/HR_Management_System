import { Component } from '@angular/core';
import { EmployeeEducationDetails } from '../employee-education-details';
import { EmployeeducationdetailsService } from '../employeeducationdetails.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  empId : any|Number;

  constructor(private service: EmployeeducationdetailsService,
    private route : ActivatedRoute, 
    private router: Router,
    private educationDropdown: EmployeeeducationdropdownService) {}

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get('empId'));
    this.education.employeeId = this.empId;

    
    this.educationDropdown.getUgQualification().subscribe(
      (data:any) => {
        this.ugqualification=data;
      },
      (error) => {
        console.error('Error fetching Ug_Qualification:', error);
      }
    );

    this.educationDropdown.getUgSpecialization().subscribe(
      (data:any) => {
        this.ugspecialization=data;
      },
      (error) => {
        console.error('Error fetching Ug_Specialization:', error);
      }
    );

    this.educationDropdown.getUgUniversity().subscribe(
      (data:any) => {
        this.uguniversity=data;
      },
      (error) => {
        console.error('Error fetching Ug_University:', error);
      }
    );

    this.educationDropdown.getPgQualification().subscribe(
      (data:any) => {
        this.pgqualification=data;
      },
      (error) => {
        console.error('Error fetching Pg_Qualification:', error);
      }
    );

    this.educationDropdown.getPgSpecialization().subscribe(
      (data:any) => {
        this.pgspecialization=data;
      },
      (error) => {
        console.error('Error fetching Pg_Specialization:', error);
      }
    );

    this.educationDropdown.getPgUniversity().subscribe(
      (data:any) => {
        this.pguniversity=data;
      },
      (error) => {
        console.error('Error fetching Pg_University:', error);
      }
    );
      
  }

  saveEmployeeEducationDetails(){
    this.education.employeeId = this.empId;
    this.education.employeeId = Number(this.route.snapshot.paramMap.get('empId'));
    console.log("CurrentEmployeeEducationDetails",this.education);
    this.service.createEmployeeEducationDetails(this.education).subscribe(data => {
      console.log(data);
      // this.employeeOfficeDetails();
    },
    error => console.log(error));
  }

  employeeOfficeDetails() {
    var empId = this.education.employeeId;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['/create-employee-office-details', empId]);
  }
  

  onSubmit(){
    // console.log(this.education)
    this.saveEmployeeEducationDetails();
    this.employeeOfficeDetails();
  }


}
