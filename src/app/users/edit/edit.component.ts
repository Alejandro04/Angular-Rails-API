import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { User } from '../../models/user.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditUser implements OnInit {
  user: User[]

  item: any = {
    first_name: '',
    last_name: '',
    identifiaction_card: '',
    email: '',
    password: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getUserID().subscribe(data => 
      this.item.push({
        first_name: "ok"
      })
    )
  }

  add() {
    if(this.connection.editUser(this.item)){
      this.item.first_name = '';
      this.item.last_name = '';
      this.item.identification_card = '';
      this.item.email = '';
      this.item.phone = '';
      this.item.password = '';
      this.item.password_confirmation = '';
    }
  }

}
