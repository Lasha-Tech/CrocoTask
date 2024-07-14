import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-popup.component.html',
  styleUrl: './posts-popup.component.css'
})
export class PostsPopupComponent {
  @Output() close = new EventEmitter();
  @Input() postDetail!:any
  isOpen: boolean | undefined;

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
    setTimeout(() => this.close.emit(), 500); // Wait for the fade-out animation to finish
  }
}
