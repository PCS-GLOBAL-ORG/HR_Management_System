import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  template:`<select [(ngModel)]="selectedRole">
    <option *ngFor="let role of roles" [value]="role.userRoleID">{{role.userRole}}</option>
  </select>`,
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  roles: any[];
  selectedRole: number;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
      this.httpClient.get<any[]>('/role/roles').subscribe((data)=> {
        this.roles = data;
      })
  }

}
