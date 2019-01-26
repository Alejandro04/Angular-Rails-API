import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewCategory implements OnInit {

  item: any = {
    name: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
  }

  add() {
    this.connection.addCategory(this.item)
    this.item.name = '';
  }

}
