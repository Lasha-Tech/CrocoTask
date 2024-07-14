import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PostTableComponent } from '../post-table/post-table.component';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../service/data.service';
import { Posts, PostsArray } from '../../models/posts.interface';
import { combineLatest, map } from 'rxjs';
import { Users } from '../../models/users.interface';
import { addUser } from './helpers/addUser.helper';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [PostTableComponent, HeaderComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.css'
})
export class PostPageComponent implements OnInit {
  posts:PostsArray = []
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef) {

  }
  ngOnInit(): void {

    combineLatest([
      this.dataService.getPosts(),
      this.dataService.getUsers()
    ]).pipe(map(([posts,user]:any) => {
        let changedPosts = addUser(posts,user)
        this.posts = changedPosts
        this.cdr.markForCheck()
    })).subscribe()


  }

}
