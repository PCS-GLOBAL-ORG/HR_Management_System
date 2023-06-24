import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { Router } from '@angular/router';
import { LocationdropdownService } from '../locationdropdown.service';


@Component({
  selector: 'app-create-employee-personal-details',
  templateUrl: './create-employee-personal-details.component.html',
  styleUrls: ['./create-employee-personal-details.component.css']
})
export class CreateEmployeePersonalDetailsComponent implements OnInit {

  empLocation: any[];
  personal: EmployeePersonalDetails = new EmployeePersonalDetails();

  constructor(private service: EmployeepersonaldetailsService, 
    private router: Router,
    private locationdropdown : LocationdropdownService) {}

  ngOnInit(): void {
      this.locationdropdown.getLocations().subscribe(
      (data:any) => {
        this.empLocation=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );
  }

  saveEmployeePersonalDetails(){
    this.service.createEmployeepersonaldetails(this.personal).subscribe(data => {
      console.log(data);
      this.employeeEducationDetails();
      console.log('success');
    },
    error => console.log(error));
  }

  employeeEducationDetails() {
    var empId = this.personal.employee_id;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['/create-employee-education-details', empId]);
  }

  onSubmit(){
    // console.log(this.personal)
    this.saveEmployeePersonalDetails();
  }

}
