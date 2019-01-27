import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './categories/list/list.component';
import { SubCategoryComponent } from './subcategories/list/list.component';
import { NewSubCategory } from './subcategories/new/new.component';
import { NewCategory} from './categories/new/new.component';
import { LoginComponent } from './users/login/login.component';
import { PostComponent } from './posts/post/post.component';
import { NewPost } from './posts/new/new.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'category/new', component: NewCategory },
  { path: 'subcategories', component: SubCategoryComponent },
  { path: 'subcategory/new', component: NewSubCategory },
  { path: 'posts', component: PostComponent },
  { path: 'post/new', component: NewPost },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CategoryComponent,
    SubCategoryComponent,
    NewSubCategory,
    NewCategory,
    LoginComponent,
    PostComponent,
    NewPost,
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
