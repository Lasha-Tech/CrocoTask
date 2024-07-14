import {Component, Input} from '@angular/core';
import { PostDetailsPopupComponent } from '../post-details-popup/post-details-popup.component';
import { HeaderComponent } from '../header/header.component';
import {Router} from "@angular/router";
import {Posts, PostsArray} from "../../models/posts.interface";
import {CommonModule, NgForOf} from "@angular/common";
import {PostsPopupComponent} from "./posts-popup/posts-popup.component";


@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [PostDetailsPopupComponent, HeaderComponent, CommonModule, PostsPopupComponent],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css'
})
export class PostTableComponent {
  @Input() posts!:PostsArray
  isDetailsOPen = false
  selectedPost:any = []

  onSelectPost(post:any) {
    this.selectedPost = post
    this.isDetailsOPen = true
  }
}
