import { Component, NgModule, OnInit } from '@angular/core';
import { Employeeuser } from '../employeeuser';
import { EmployeeuserService } from '../employeeuser.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RolesdropdownService } from '../rolesdropdown.service';

@Component({
  selector: 'app-create-employee-user',
  templateUrl: './create-employee-user.component.html',
  styleUrls: ['./create-employee-user.component.css'],
})
export class CreateEmployeeUserComponent implements OnInit {
  // userRole: string = '';
  userRoles: any[];
  // selectedRole: UserRoleMaster | undefined;

  // userRole : UserRoleMaster = new UserRoleMaster();
  // roles: any [];
  employee: Employeeuser = new Employeeuser();

  constructor(
    private employeeuserService: EmployeeuserService,
    private router: Router,
    private httpClient: HttpClient,
    private rolesdrropdownService:RolesdropdownService
  ) {}

  ngOnInit(): void {
    this.rolesdrropdownService.getroles().subscribe(
      (data:any) => {
        this.userRoles=data;
      },
      (error) => {
        console.error('Error fetching user roles:', error);
      }
    );

    // this.loadRoles();
    // this.allUserRole();
  }

  // onSave(){
  //   if(this.selectedRole){
  //     console.log('Selected role:', this.selectedRole);
  //   }
  // }

  employeePersonalDetails() {
    var empId = this.employee.employeeId;
    console.log(' My emp Id --> ' + empId);
    this.router.navigate(['/create-employee-personal-details', empId]);
  }

  saveEmployeeUser() {
    // this.employee.userRoleID = 1;
    this.employeeuserService.createEmployeeUser(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employeePersonalDetails();
      },
      (error) => console.log(error)
    );
  }

  backToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    console.log(' Employee Object' + this.employee);
    console.log(' Employee Id  --->' + this.employee.employeeId);
    console.log(' Role Id --- > ' + this.employee.userRoleID);
    this.saveEmployeeUser();
  }

  // allUserRole(){
  //   this.employeeuserService.getAllUserRole()
  //   .subscribe (data =>{
  //    console.log(data);
  //   },
  //   error => console.log(error));
  // }

  // allUserRole(){
  //   this.employeeuserService.getAllUserRole().subscribe(roles => {
  //     this.roles = roles;
  //   })
  // }

  // employeeuser = [
  // {
  //   userRoleID: 1,
  //  userrole: 'Trainee Software Developer '
  //   },
  //  {

  //   userRoleID: 2,
  //   userrole: 'Junior Software Developer '
  //  },

  //  {
  //  userRoleID: 3,
  //  userrole: ' Software Developer '
  //  },
  // {
  //   userRoleID: 4,
  //   userrole: ' Software Developer '
  //   },

  //  {
  // userRoleID: 5,
  //  userrole: ' HR Counsilor '
  //  },

  // {
  //  userRoleID: 6,
  //  userrole: ' Chief Executive Officer '
  // },

  //  {
  //  userRoleID: 7,
  // userrole: ' Chief Marketing Officer '
  //  },

  //];

  // prtlObj: { userrole: string; category: { userRoleID: number; userrole: string, } };

  //generateRandomObj() {
  // this.prtlObj = {
  //  ...this.prtlObj,
  //category: this.employeeuser[Math.floor((Math.random() * 100) % 3)]
  // };
  // }

  // updateObj(id: string) {
  //  const category = this.employeeuser.find(x => x.userRoleID === Number.parseInt(id));
  //  this.prtlObj = {
  //   ...this.prtlObj,
  //  category
  // };
  // }
  //}

  // loadRoles(){
  //   this.httpClient.get('http://localhost:8080/role/roles').subscribe((result: any) => {
  //     this.roles = result.data;
  //   })
  // }
}
