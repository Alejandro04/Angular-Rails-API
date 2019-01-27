import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[]

  constructor(private connection: ConnectionService) { }

  ngOnInit() {
    this.connection.getPosts()
      .subscribe(data => this.posts = data)
  }

}
