import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { HomeComponent } from './home/home.component';


export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: 'LoginComponent'
    },
    {
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
]