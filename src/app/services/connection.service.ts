import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  API_URL = 'http://localhost:8000/api';
  ID = '';

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>(`${this.API_URL}/users`)
  }

  getUserID() {
    // Cómo llamar a ${this.API_URL} de forma dinamica? qué método se usa para esto?
    return this._http.get<User[]>(`${this.API_URL}/users/${this.ID}`)
  }


  addUser(item) {
    return this._http.post(`${this.API_URL}/users`, item, { headers: this.headers })
      .subscribe(
        data => {
          console.log('success', data),
            alert("Success");
        },
        error => {
          // Cómo imprimir los errores de forma individual en los formularios?
          console.log('Error', error.error.errors)
        },
      );
  }


  editUser(item) {
    return this._http.put(`${this.API_URL}/users`, item, { headers: this.headers })
      .subscribe(
        data => {
          console.log('success', data),
            alert("Success");
        },
        error => {
          console.log('Error', error.error.errors)
        },
      );
  }


}

