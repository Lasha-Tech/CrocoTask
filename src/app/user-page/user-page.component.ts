import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserTableComponent } from '../user-table/user-table.component';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
