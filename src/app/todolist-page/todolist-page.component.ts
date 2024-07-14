import { ChangeDetectorRef, Component } from '@angular/core';
import { PostsArray } from '../../models/posts.interface';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { Todo } from './helepr/todo-list.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todolist-page.component.html',
  styleUrl: './todolist-page.component.css'
})
export class TodolistPageComponent {
  todos: Todo[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,private cdr:ChangeDetectorRef
  ) {}
  ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');

    if (userIdParam !== null) {
      const userId = +userIdParam;

      if (!isNaN(userId)) {
        this.dataService.getTodos(userId).subscribe((todo:any) => {
          this.todos = todo;          
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
