import { Component } from '@angular/core';
import { PostTableComponent } from '../post-table/post-table.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [PostTableComponent, HeaderComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent {

}
