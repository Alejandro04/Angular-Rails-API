import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './users/list/list.component';
import { NewUser } from './users/new/new.component';
import { EditUser } from './users/edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/new', component: NewUser },
  { path: 'users/:id', component: EditUser },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NewUser,
    EditUser,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
