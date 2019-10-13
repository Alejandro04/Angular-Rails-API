import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewUser implements OnInit {

  item: any = {
    first_name: '',
    last_name: '',
    identifiaction_card: '',
    email: '',
    password: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
  }

  add() {
    if(this.connection.addUser(this.item)){
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
