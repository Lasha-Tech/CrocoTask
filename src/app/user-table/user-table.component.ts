import {Component, Input} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {UsersArray} from "../../models/users.interface";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  @Input() users!:UsersArray
  constructor(private router: Router) {}
  navigateToDetails(userId: number) {
    this.router.navigate(['/users-posts', userId]);
  }
}
