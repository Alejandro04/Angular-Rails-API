import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

//agregar los campos de la db
export interface Item { title: string; body: string; }

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  apiUrl = 'https://still-anchorage-83213.herokuapp.com/api/v1/posts';
  
  constructor(private _http: HttpClient) { }

  getPosts(){
    return this._http.get<Post[]>(this.apiUrl)
  }
}

