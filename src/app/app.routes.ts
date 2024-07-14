import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from './home/home.component';
import {PostCardsComponent} from "./post-cards/post-cards.component";
import { TodolistPageComponent } from './todolist-page/todolist-page.component';
import { PostPageComponent } from './post-page/post-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'posts', component: PostPageComponent, title: 'Posts' },
    { path: 'users-posts/:id', component: PostCardsComponent, title: 'User Posts' },
    { path: 'users', component: UserPageComponent, title: 'Users' },
    // { path: 'todo', component: TodolistPageComponent, title: 'Todo list' },
];

// export default routes;
