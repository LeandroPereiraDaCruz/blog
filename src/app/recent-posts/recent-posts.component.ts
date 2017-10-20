import { Component, OnInit } from '@angular/core';
import { ApiserverService } from '../apiserver.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {

  posts: any;

  constructor(private api: ApiserverService) { }

  ngOnInit() {
      this.api.getPosts()
      .subscribe(res => {
          this.posts = res;
      })
  }

}
