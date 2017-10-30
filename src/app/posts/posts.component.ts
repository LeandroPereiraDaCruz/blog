import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { ApiserverService } from '../apiserver.service';
import { FacebookService } from 'ngx-facebook';

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
      this.xfbmlParse();
    }, error => {
      console.error('Error getting posts from API ' + this.api.getUrl());
      console.error('ERROR', error);
      this.loading.nativeElement.innerHTML = 'Error: Didn\'t connect to the API!';
    });
  }


  ngOnInit() { }

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
      console.error('FB not defined');
    }
  }
}
