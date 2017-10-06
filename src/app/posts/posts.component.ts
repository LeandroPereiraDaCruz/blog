import { Component, OnInit } from '@angular/core';

import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { ApiserverService } from '../apiserver.service';
import { FacebookService } from 'ngx-facebook';

declare var window: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private api: ApiserverService) { }


  ngOnInit() {
    this.api.getPosts().subscribe(res => {
      console.log('Got posts from API ' + this.api.getUrl());
      console.log('RESPONSE', res);
      this.posts = res;
      this.xfbmlParse();
    }, error => {
      console.log('Error getting posts from API ' + this.api.getUrl());
      console.log('ERROR', error);
    });
  }

  delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  async xfbmlParse() {
    await this.delay(300); // wait a little bit while things are being rendered in the page
    if (window.FB) {
      window.FB.XFBML.parse(window.document.body, () => {
        console.log('Facebook comments updated');
      });
    } else {
      console.log('FB not defined');
    }
  }
}



interface Post {
    id: string;
    title: string;
    created: string;
    body: string;
    category: string;
}
