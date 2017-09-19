import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { HomeComponent } from './home/home.component';
import { PostTableComponent } from './post-table/post-table.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'posttable',
        component: PostTableComponent
    }

]