import { Component, NgModule, OnInit } from '@angular/core';
import { Employeeuser } from '../employeeuser';
import { EmployeeuserService } from '../employeeuser.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-employee-user',
  templateUrl: './create-employee-user.component.html',
  styleUrls: ['./create-employee-user.component.css']
})
export class CreateEmployeeUserComponent implements OnInit{

  // userRole: string = '';
  // roles: any []= [];

  // userRole : UserRoleMaster = new UserRoleMaster();
  roles: any [];
  selectedRole: number;

  employee : Employeeuser = new Employeeuser();

  constructor(private employeeuserService : EmployeeuserService,
    private router: Router,
    private httpClient: HttpClient) {}


  ngOnInit(): void {
    // this.httpClient.get<any[]>('/role/roles').subscribe((data)=> {
    //   this.roles = data;
    // });

    // this.loadRoles();
    this.allUserRole();
  }

  // saveProfile(){
  //   const payload = {
  //     userRoleID: this.selectedRole,
  //   };
  //   this.httpClient.post('/emp/employees', payload).subscribe(()=>{

  //   });
  // }
 
  employeePersonalDetails(){
    var empId = this.employee.employeeId;
    console.log(" My emp Id --> "+ empId);
    this.router.navigate(['/create-employee-personal-details',empId]);
    
  }


  saveEmployeeUser(){
    // this.employee.userRoleID=1;
    // this.employee.userRoleID=2;
    // this.employee.userRoleID=3;
    // this.employee.userRoleID=4;
    // this.employee.userRoleID=5;
    // this.employee.userRoleID=6;
    // this.employee.userRoleID=7;
    console.log('  Role Id '+ this.employee.userRoleID);
    this.employeeuserService.createEmployeeUser(this.employee).subscribe (data =>{
      console.log(data);    
      this.employeePersonalDetails();
    },
    error => console.log(error));
  }

  backToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  onSubmit(){
    console.log(" Employee Object"  +this.employee);
    console.log(" Employee Id  --->"  +this.employee.employeeId);
    console.log(" Role Id --- > " + this.employee.userRoleID)
    this.saveEmployeeUser();
  }

  // allUserRole(){
  //   this.employeeuserService.getAllUserRole()
  //   .subscribe (roles =>{
  //    console.log(roles);
  //   },
  //   error => console.log(error));
  // }

  allUserRole(){
    this.employeeuserService.getAllUserRole().subscribe(roles => {
      this.roles = roles;
    });
  }

  // loadRoles(){
  //   this.httpClient.get('http://localhost:8080/role/roles').subscribe((result: any) => {
  //     this.roles = result.data;
  //   })
  // }
    
  }
