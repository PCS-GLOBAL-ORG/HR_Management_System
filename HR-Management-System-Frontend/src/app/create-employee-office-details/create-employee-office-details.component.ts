import { Component } from '@angular/core';
import { EmployeeOfficeDetails } from '../employee-office-details';
import { EmployeeeofficedetailsdropdownService } from '../employeeeofficedetailsdropdown.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  //hardcoded for empStatus dropdown value.
  employeeStatuses = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' }
  ];

  //hardcoded for emptype dropdown value.
  employeeTypes = [
    { id: 1, name: 'Parmanent' },
    { id: 2, name: 'Contract' }
  ];
  
  officeDetails : EmployeeOfficeDetails = new EmployeeOfficeDetails();
  empId : any|Number

  constructor( private service : EmployeeeofficedetailsService,
    private router: Router,
    private route: ActivatedRoute,
    private officeDetailsDropdown: EmployeeeofficedetailsdropdownService) {}

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get('empId'));
    this.officeDetails.employee_id = this.empId;


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
    this.officeDetails.employee_id = this.empId;
    this.officeDetails.employee_id = Number(this.route.snapshot.paramMap.get('empId'));
    this.service.createEmployeeOfficeDetails(this.officeDetails).subscribe(data => {
      console.log(data);
      // this.employeeAccountDetails();
    },
    error => console.log(error));
  }

  employeeAccountDetails() {
    var empId = this.officeDetails.employee_id;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['create-employee-account-details', empId]);
  }


  onSubmit(){
    console.log(this.officeDetails)
    this.saveEmployeeOfficeDetails();
    this.employeeAccountDetails();
  }


}


