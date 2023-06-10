import { Component, OnInit } from '@angular/core';
import { EmployeepersonaldetailsService } from '../employeepersonaldetails.service';
import { EmployeePersonalDetails } from '../employee-personal-details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-employee-personal-details',
  templateUrl: './update-employee-personal-details.component.html',
  styleUrls: ['./update-employee-personal-details.component.css']
})
export class UpdateEmployeePersonalDetailsComponent implements OnInit{

  userId: number;
  personal: EmployeePersonalDetails = new EmployeePersonalDetails();
  constructor(private service: EmployeepersonaldetailsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.personal = new EmployeePersonalDetails();

    this.userId = this.route.snapshot.params['userId'];

    this.service.getEmployeeDetailsById(this.userId).subscribe(data => {
      this.personal = data;
    }, error => console.log(error));  
  }

  

  onSubmit(){
    this.service.updateEmployeePersonalDetails(this.userId, this.personal).subscribe(data => {

    }, error => console.log(error));
  }

  

}
