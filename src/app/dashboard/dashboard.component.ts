import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User[]

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.authUser();
  }

}
