import { Component, OnInit } from '@angular/core';
import { Employeeuser } from '../employeeuser';
import { EmployeeuserService } from '../employeeuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employeeuser[];

  constructor(private employeeuserService: EmployeeuserService, private router : Router) {}

  ngOnInit() : void{ 
//     this.employees = [{
//     "id" : 1,
//     "usercallName": "subhabrata bose",
//     "userName" : "subhabrata",
//     "userPassword": "1234",
//     "userroleId" : 1
// }]

    this.getUserEmployees();
    
}
  private getUserEmployees(){
    this.employeeuserService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(userId: number){
    this.router.navigate(['view-employee-user', userId]);
  }

  updateEmployeeUser(userId: number){
    this.router.navigate(['update-user-employee', userId]);
  }

  deleteEmployeeUser(userId: number){
    this.employeeuserService.deleteEmployeeUser(userId).subscribe(data => {
      console.log(data);
      this.getUserEmployees();
    })
  }

}
