import { Component } from '@angular/core';

@Component({
  selector: 'app-post-details-popup',
  standalone: true,
  imports: [],
  templateUrl: './post-details-popup.component.html',
  styleUrl: './post-details-popup.component.css'
})
export class PostDetailsPopupComponent {
  datad = fetch('https://jsonplaceholder.typicode.com/')
  .then(response => response.json())
  .then(json => console.log(json));
  
}
