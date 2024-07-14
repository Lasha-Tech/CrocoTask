import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostCardsPageComponent } from './post-cards-page/post-cards-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home'},
    { path: 'users', component: UserPageComponent, title: 'Users' },
    { path: 'posts', component: PostPageComponent, title: 'Posts' },
    { path: 'posts-cards', component: PostCardsPageComponent, title: 'Posts-Cards' },
];

// export default routes;
