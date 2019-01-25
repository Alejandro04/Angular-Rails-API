import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewSubCategory implements OnInit {

  item: any = {
    name: '',
    category_id: 3,
  }

  constructor(private service: ConnectionService) { }

  ngOnInit() {
  }

  add() {
    this.service.addSubCategory(this.item)
    this.item.name = '';
  }

}
