import { Routes } from '@angular/router';
import { UserTableComponent } from './user-table/user-table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'users', component: UserTableComponent, title: 'Users' },
    { path: 'posts', component: PostTableComponent, title: 'Posts' }
];

// export default routes;
