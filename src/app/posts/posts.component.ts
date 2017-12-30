import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { ApiserverService } from '../apiserver.service';

import { Post } from '../_interfaces/post';

declare var window: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  @ViewChild('loading') loading:ElementRef;

  posts: Post[];

  constructor(private api: ApiserverService) {
    this.api.getPosts('?sortBy=id&order=desc').subscribe(res => {
      console.log('Got posts from API ' + this.api.getUrl());
      console.log('RESPONSE', res);
      this.posts = res;
    }, error => {
      console.error('Error getting posts from API ' + this.api.getUrl());
      console.error('ERROR', error);
      this.loading.nativeElement.innerHTML = 'Error: Didn\'t connect to the API!';
    });
  }


  ngOnInit() { }

}
