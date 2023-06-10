import { Component, OnInit } from '@angular/core';
import { EmployeeEducationDetails } from '../employee-education-details';
import { Router } from '@angular/router';
import { EmployeeducationdetailsService } from '../employeeducationdetails.service';

@Component({
  selector: 'app-employee-education-details-list',
  templateUrl: './employee-education-details-list.component.html',
  styleUrls: ['./employee-education-details-list.component.css']
})
export class EmployeeEducationDetailsListComponent implements OnInit {

  employees: EmployeeEducationDetails[];
  constructor(private service: EmployeeducationdetailsService,
    private router: Router) {}

  ngOnInit(): void {
      this.getEmployeeEducationDetails();
  }

  private getEmployeeEducationDetails(){
    this.service.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

}
