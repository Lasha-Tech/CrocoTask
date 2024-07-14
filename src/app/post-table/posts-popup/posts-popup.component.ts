import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-posts-popup',
  standalone: true,
  imports: [],
  templateUrl: './posts-popup.component.html',
  styleUrl: './posts-popup.component.css'
})
export class PostsPopupComponent {
  @Output() close = new EventEmitter();
}
