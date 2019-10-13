import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  API_URL = 'http://localhost:8000/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  });

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>(`${this.API_URL}/users`)
  }

  
  addUser(item) {
    return this._http.post(`${this.API_URL}/users`, item, { headers: this.headers })
      .subscribe(
        data => {
          console.log('success', data),
            alert("Success");
          //swal("Success")
        },
        error => {
          console.log('Error', error)
          //  swal("Error")
        },
      );
  }


}

