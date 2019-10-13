import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewSubCategory implements OnInit {
  categories: Category[]

  item: any = {
    name: '',
    category_id: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getCategories()
      .subscribe(data => this.categories = data)
  }

  add() {
    this.connection.addSubCategory(this.item)
    this.item.name = '';
  }

}
