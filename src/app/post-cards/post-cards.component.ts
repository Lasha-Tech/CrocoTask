import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../service/data.service";
import {CommonModule, SlicePipe} from "@angular/common";
import {PostsArray} from "../../models/posts.interface";

@Component({
  selector: 'app-post-cards',
  standalone: true,
  imports: [
    SlicePipe,CommonModule
  ],
  templateUrl: './post-cards.component.html',
  styleUrl: './post-cards.component.css'
})
export class PostCardsComponent implements OnInit{
  posts: PostsArray = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,private cdr:ChangeDetectorRef
  ) {}
  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam !== null) {
      const userId = +userIdParam;

      if (!isNaN(userId)) {
        this.dataService.getUserPosts(userId).subscribe((posts) => {
          this.posts = posts;
          this.cdr.markForCheck()
        });
      } else {
        console.error('Invalid user ID.');
      }
    } else {
      console.error('User ID is null.');
    }
  }
}
