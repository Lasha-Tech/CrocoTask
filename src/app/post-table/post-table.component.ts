import { Component } from '@angular/core';
import { PostDetailsPopupComponent } from '../post-details-popup/post-details-popup.component';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [PostDetailsPopupComponent, HeaderComponent],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css'
})
export class PostTableComponent {

}
