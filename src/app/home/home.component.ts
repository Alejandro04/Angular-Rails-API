import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[]

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    return this.connection.getPosts()
      .subscribe(data => this.posts = data)
  }

}
