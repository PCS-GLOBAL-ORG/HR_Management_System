import { Component, OnInit } from '@angular/core';
import { EmployeeAccountDetails } from '../employee-account-details';
import { EmployeeAccountDetailsService } from '../employee-account-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-account-details',
  templateUrl: './create-employee-account-details.component.html',
  styleUrls: ['./create-employee-account-details.component.css']
})
export class CreateEmployeeAccountDetailsComponent implements OnInit{

  account: EmployeeAccountDetails = new EmployeeAccountDetails();
  empId : any|Number;

  constructor(private service: EmployeeAccountDetailsService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get('empId'));
    this.account.employee_id = this.empId;
      console.log("AccountConponent");
  }

  saveEmployeeAccountDetails(){
    this.account.employee_id = this.empId;
    this.account.employee_id = Number(this.route.snapshot.paramMap.get('empId'));
    this.service.createEmployeeAccountdetails(this.account).subscribe(data => {
      console.log(data);
      this.backToEmployeeList();
      console.log('success');
    },
    error => console.log(error));
  }

  // employeeJobDetails() {
  //   var empId = this.account.employee_id;
  //   console.log(' My emp Id --> ' + empId);
  //   this.router.navigate(['/create-employee-Job-details', empId]);
  // }

  backToEmployeeList() {
    this.router.navigate(['/employees']);
  }


  onSubmit(){
    this.saveEmployeeAccountDetails();
  }


}
