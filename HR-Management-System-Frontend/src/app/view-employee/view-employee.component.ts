import { Component, OnInit } from '@angular/core';
import { Employeeuser } from '../employeeuser';
import { ActivatedRoute } from '@angular/router';
import { EmployeeuserService } from '../employeeuser.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{


  userId: number;
  employee: Employeeuser
  constructor(private route: ActivatedRoute,
    private employeeService : EmployeeuserService) {}


    ngOnInit(): void {
      this.userId = this.route.snapshot.params['userId'];
      
      this.employee = new Employeeuser();
      this.employeeService.getEmployeeById(this.userId).subscribe(data => {
        this.employee = data;
      })

    }

}
