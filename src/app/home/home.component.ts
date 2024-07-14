import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { PostTableComponent } from '../post-table/post-table.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationComponent } from '../navigation/navigation.component';
import {DataService} from "../service/data.service";
import {combineLatest, map} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UsersArray} from "../../models/users.interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, PostTableComponent, FooterComponent, NavigationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  posts:any = []
  users:UsersArray = []
  constructor(private dataService: DataService,private cdr:ChangeDetectorRef) {
  }

  ngOnInit() {
    combineLatest([
      this.dataService.getPosts(),
      this.dataService.getUsers()
    ]).pipe(map(([posts,users]) => {
        this.posts = posts;
        this.users = users;
        this.cdr.markForCheck()
    })).subscribe()
  }
}
