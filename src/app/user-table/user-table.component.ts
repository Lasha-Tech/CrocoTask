import {Component, Input} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {UsersArray} from "../../models/users.interface";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [HeaderComponent,CommonModule, RouterModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  @Input() users!:UsersArray
  constructor(private router: Router) {}
  navigateToDetails(userId: number,route:string) {
    this.router.navigate([route, userId]);
  }
  
}
