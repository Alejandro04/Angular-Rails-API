import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { Category } from '../models/category.model';
import { SubCategory } from '../models/subcategory.model';
import * as swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  API_URL = 'https://still-anchorage-83213.herokuapp.com/api/v1';
  LOGIN_URL = 'https://still-anchorage-83213.herokuapp.com/auth/sign_in';

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'uid': localStorage.getItem('uid'),
    'access-token': localStorage.getItem('access-token'),
    'client': localStorage.getItem('client'),
  });

  constructor(private _http: HttpClient) { }

  //Landing
  getPosts() {
    return this._http.get<Post[]>(`${this.API_URL}/posts`)
  }

  getCategories() {
    return this._http.get<Category[]>(`${this.API_URL}/categories`, { headers: this.headers })
  }

  getSubCategories() {
    return this._http.get<SubCategory[]>(`${this.API_URL}/subcategories`, { headers: this.headers })
  }

  addCategory(item){
    return this._http.post(`${this.API_URL}/categories`, item, {headers: this.headers})
    .subscribe(
      data => {
        console.log('success', data),
        alert("Success");
       // swal("Success")
      },
      error =>{
        console.log('Error', error)
      //  swal("Error")
      },
    );
  }

  addSubCategory(item){
    return this._http.post(`${this.API_URL}/subcategories`, item, {headers: this.headers})
    .subscribe(
      data => {
        console.log('success', data),
        alert("Success");
       // swal("Success")
      },
      error =>{
        console.log('Error', error)
      //  swal("Error")
      },
    );
  }

  authUser() {
    return this._http.post<User[]>(this.LOGIN_URL,
      {
        email: 'superadmin@superadmin.com',
        password: '12345678',
      },
      { observe: 'response' }).subscribe(res => {
        localStorage.setItem('client', res.headers.get('client'));
        localStorage.setItem('uid', res.headers.get('uid'));
        localStorage.setItem('access-token', res.headers.get('access-token'));
      });
  }
}

