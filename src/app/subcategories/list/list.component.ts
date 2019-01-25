import { Component, OnInit } from '@angular/core';
import { SubCategory } from '../../models/subcategory.model';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SubCategoryComponent implements OnInit {
  subcategories: SubCategory[]

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getSubCategories()
    .subscribe(data => this.subcategories = data)
  }

}
