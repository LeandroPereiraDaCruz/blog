import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})



export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(window.FB)
      window.FB.XFBML.parse();
  }
}