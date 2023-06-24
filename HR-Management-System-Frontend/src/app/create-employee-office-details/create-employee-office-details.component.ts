import { Component } from '@angular/core';
import { EmployeeOfficeDetails } from '../employee-office-details';
import { EmployeeeofficedetailsdropdownService } from '../employeeeofficedetailsdropdown.service';
import { Router } from '@angular/router';
import { EmployeeeofficedetailsService } from '../employeeeofficedetails.service';

@Component({
  selector: 'app-create-employee-office-details',
  templateUrl: './create-employee-office-details.component.html',
  styleUrls: ['./create-employee-office-details.component.css']
})
export class CreateEmployeeOfficeDetailsComponent {
  parentDetails: any[];
  subIou: any[];
  supervisor: any[];
  tpcsGrade: any[];
  tpcsLocation: any[];
  baseBranch: any[];

  
  officeDetails : EmployeeOfficeDetails = new EmployeeOfficeDetails();

  constructor( private service : EmployeeeofficedetailsService,
    private router: Router,
    private officeDetailsDropdown: EmployeeeofficedetailsdropdownService) {}

  ngOnInit(): void {
    this.officeDetailsDropdown.getParentDetails().subscribe(
      (data:any) => {
        this.parentDetails=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.officeDetailsDropdown.getSubIou().subscribe(
      (data:any) => {
        this.subIou=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.officeDetailsDropdown.getSupervisor().subscribe(
      (data:any) => {
        this.supervisor=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.officeDetailsDropdown.getTpcsGrade().subscribe(
      (data:any) => {
        this.tpcsGrade=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.officeDetailsDropdown.getTpcsLocation().subscribe(
      (data:any) => {
        this.tpcsLocation=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.officeDetailsDropdown.getBaseBranch().subscribe(
      (data:any) => {
        this.baseBranch=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );
      
  }

  saveEmployeeOfficeDetails(){
    this.service.createEmployeeOfficeDetails(this.officeDetails).subscribe(data => {
      console.log(data);
      // this.employeeOfficeDetails();
    },
    error => console.log(error));
  }


  onSubmit(){
    console.log(this.officeDetails)
    this.saveEmployeeOfficeDetails();
  }


}


