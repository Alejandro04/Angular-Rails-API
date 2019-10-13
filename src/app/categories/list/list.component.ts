import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[]

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getCategories()
      .subscribe(data => this.categories = data)
  }

}
