import { Component, OnInit } from '@angular/core';
import { EmployeeProfessionalDetails } from '../employee-professional-details';
import { EmployeeProfessionalDetailsService } from '../employee-professional-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-professional-details',
  templateUrl: './create-employee-professional-details.component.html',
  styleUrls: ['./create-employee-professional-details.component.css']
})
export class CreateEmployeeProfessionalDetailsComponent implements OnInit{

  professional: EmployeeProfessionalDetails = new EmployeeProfessionalDetails();

  empId : any|Number;

  isFresher: boolean = true;


  constructor(private service: EmployeeProfessionalDetailsService, 
    private router: Router,
    private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.empId = Number(this.route.snapshot.paramMap.get('empId'));
    this.professional.employee_id = this.empId;
      
  }

  saveEmployeeProfessionalDetails(){
    this.professional.employee_id = this.empId;
    this.professional.employee_id = Number(this.route.snapshot.paramMap.get('empId'));
    this.service.createEmployeeProfessionaldetails(this.professional).subscribe(data => {
      console.log(data);
      this.employeeEducationDetails();
      console.log('success');
    },
    error => console.log(error));
  }

  employeeEducationDetails() {
    var empId = this.professional.employee_id;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['/create-employee-education-details', empId]);
  }

  onSubmit(){
    console.log(this.professional)
    this.saveEmployeeProfessionalDetails();
  }

  disableFields() {
    this.isFresher = true;
  }

  enableFields() {
    this.isFresher = false;
  }

}

