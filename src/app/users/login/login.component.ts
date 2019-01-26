import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  item: any = {
    email: '',
    password: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
  }

  add() {
    this.connection.authUser(this.item);
  }

}
