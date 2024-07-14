import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from './home/home.component';
import {PostCardsComponent} from "./post-cards/post-cards.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'posts', component: PostTableComponent, title: 'Posts' },
    { path: 'users-posts/:id', component: PostCardsComponent, title: 'User Posts' },
    { path: 'users', component: UserPageComponent, title: 'Users' },
];

// export default routes;
