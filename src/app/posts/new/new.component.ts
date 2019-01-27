import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewPost implements OnInit {
  categories: Category[]

  item: any = {
    title: '',
    body: '',
    category_id: '',
  }

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getCategories()
      .subscribe(data => this.categories = data)
  }

  add() {
    this.connection.addPost(this.item);
    this.item.title = '';
    this.item.body = '';
  }

}
