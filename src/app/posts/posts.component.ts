import { Component, OnInit } from '@angular/core';
import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { ApiserverService } from '../apiserver.service';

declare var window: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts:Post[];

  constructor(private api:ApiserverService) { }

  ngOnInit() {
    this.api.getPosts().subscribe(res=>{
      console.log("Got posts from API")
      console.log(res);
      this.posts = res;
      if(window.FB)
        window.FB.XFBML.parse();
    },error => {
      console.log(error);
    });

  }
}

interface Post{
    id: string;
    title: string;
    created: string;
    body: string;
    category: string;
}