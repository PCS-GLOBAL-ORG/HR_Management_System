import { Component, OnInit } from '@angular/core';
import { EmployeeuserService } from '../employeeuser.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employeeuser } from '../employeeuser';

@Component({
  selector: 'app-update-employee-user',
  templateUrl: './update-employee-user.component.html',
  styleUrls: ['./update-employee-user.component.css']
})
export class UpdateEmployeeUserComponent implements OnInit {

  userId : number;
  employee : Employeeuser = new Employeeuser();
  constructor(private employeeuserService : EmployeeuserService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
   this.userId = this.route.snapshot.params['userId'];

   this.employeeuserService.getEmployeeById(this.userId).subscribe (data => {
    this.employee = data;
   }, error => console.log(error));
  }

  onSubmit(){
    this.employeeuserService.updateEmployeeUser(this.userId, this.employee).subscribe(data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}
