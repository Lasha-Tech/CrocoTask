import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-post-cards-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './post-cards-page.component.html',
  styleUrl: './post-cards-page.component.css'
})
export class PostCardsPageComponent {

}
