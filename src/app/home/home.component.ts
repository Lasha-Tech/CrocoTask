import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { PostTableComponent } from '../post-table/post-table.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, PostTableComponent, FooterComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
