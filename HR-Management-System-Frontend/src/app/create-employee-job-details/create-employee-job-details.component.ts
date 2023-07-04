import { Component } from '@angular/core';
import { EmployeeJobDetails } from '../employee-job-details';
import { EmployeeJobDetailsService } from '../employee-job-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee-job-details',
  templateUrl: './create-employee-job-details.component.html',
  styleUrls: ['./create-employee-job-details.component.css']
})
export class CreateEmployeeJobDetailsComponent {

  Job : EmployeeJobDetails = new EmployeeJobDetails();
  empId : any|Number;

  constructor(private service: EmployeeJobDetailsService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.empId = Number(this.route.snapshot.paramMap.get('empId'));
    this.Job.employeeId = this.empId;
      
  }

  saveEmployeeJobDetails(){
    this.Job.employeeId = this.empId;
    this.Job.employeeId = Number(this.route.snapshot.paramMap.get('empId'));
    this.service.createEmployeeJob(this.Job).subscribe(data => {
      console.log(data);
      
      console.log('success');
    },
    error => console.log(error));
  }

  backToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  

  onSubmit(){
    // console.log(this.job)
    this.saveEmployeeJobDetails();
    this.backToEmployeeList();
  }

}
