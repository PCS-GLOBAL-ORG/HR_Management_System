import { Component, OnInit } from '@angular/core';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationdropdownService } from '../locationdropdown.service';


@Component({
  selector: 'app-create-employee-personal-details',
  templateUrl: './create-employee-personal-details.component.html',
  styleUrls: ['./create-employee-personal-details.component.css']
})
export class CreateEmployeePersonalDetailsComponent implements OnInit {

  employeeGender = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' }
  ];

  employeeMaritalStatus = [
    { id: 1, name: 'Marriage' },
    { id: 2, name: 'Single' }
  ];

  empLocation: any[];
  country: any[];

  personal: EmployeePersonalDetails = new EmployeePersonalDetails();
  empId : any|Number
  constructor(private service: EmployeepersonaldetailsService, 
    private route : ActivatedRoute,
    private router: Router,
    private locationdropdown : LocationdropdownService) {}

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get('empId'));

      this.locationdropdown.getLocations().subscribe(
      (data:any) => {
        this.empLocation=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    this.service.getCountry().subscribe(
      (data:any) => {
        this.country=data;
      },
      (error) => {
        console.error('Error fetching country:', error);
      }
    );
  }

  saveEmployeePersonalDetails(){
    this.personal.employee_id = this.empId;
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
    this.router.navigate(['/create-employee-professional-details', empId]);
  }

  onSubmit(){
    // console.log(this.personal)
    this.saveEmployeePersonalDetails();
  }

}
