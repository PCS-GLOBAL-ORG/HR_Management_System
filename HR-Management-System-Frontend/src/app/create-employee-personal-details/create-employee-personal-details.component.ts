import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee-personal-details',
  templateUrl: './create-employee-personal-details.component.html',
  styleUrls: ['./create-employee-personal-details.component.css']
})
export class CreateEmployeePersonalDetailsComponent implements OnInit {

  personal: EmployeePersonalDetails = new EmployeePersonalDetails();
  constructor(private service: EmployeepersonaldetailsService, private router: Router) {}

  ngOnInit(): void {
      
  }

  saveEmployeePersonalDetails(){
    this.service.createEmployeepersonaldetails(this.personal).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.personal)
    this.saveEmployeePersonalDetails();
  }

}
