import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { RouterModule } from '@angular/router';
import { DataService } from '../service/data.service';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { UsersArray } from '../../models/users.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [HeaderComponent, UserTableComponent, RouterModule,CommonModule,FormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent implements OnInit {
  users:UsersArray = []
  filterValue: string = '';  
  filterType = new BehaviorSubject('all')
  constructor(private dataService:DataService,private cdr:ChangeDetectorRef) {
    }

    getFilterTypeValue(value:string) {
        this.filterType.next(value)
    }
    ngOnInit(): void {
        this.getUser()
    }

    getUser() {
      combineLatest([
        this.filterType.pipe(
          debounceTime(500),
          distinctUntilChanged()
        ),
        this.dataService.getUsers()
      ]).pipe(
        map(([filterType, users]) => {
          if (filterType === 'all' || filterType === '') {
            return users;
          }
          return users.filter(user =>
            user.name.toLocaleLowerCase().includes(filterType) ||
            user.username.toLocaleLowerCase().includes(filterType) ||
            user.email.toLocaleLowerCase().includes(filterType)
          );
        })
      ).subscribe((user) => {
        this.users = user;
        this.cdr.markForCheck()
      })
    }
      
}
