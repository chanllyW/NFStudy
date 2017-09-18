import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListInfoComponent } from './list-info/list-info.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import {appRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }