import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-personal-details',
  templateUrl: './employee-personal-details.component.html',
  styleUrls: ['./employee-personal-details.component.css']
})
export class EmployeePersonalDetailsComponent implements OnInit {

  empId: any;

  Personal : any;

  employeePersonalDetails : EmployeePersonalDetails[];

  constructor(
    private service : EmployeepersonaldetailsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['empId'];
    console.log("this is employeeId" + this.empId);
    this.Personal.employee_id = this.empId;
    
  }

  // private getEmployeePersonalDetails(){
  //   this.service.getEmployeesList().subscribe(data => {
  //     this.employeePersonalDetails = data;
  //   })
  // }

  // updateEmployeePersonalDetails(userId: number){
  //   this.router.navigate(['update-employee-personal-details', userId]);
  // }

}
