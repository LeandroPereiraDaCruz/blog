import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiserverService } from '../apiserver.service';
import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { FacebookService } from 'ngx-facebook';

declare var window: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  id: string;
  private sub;
  post: Post;

  constructor(
      private route: ActivatedRoute,
      private api: ApiserverService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        this.id = params['id'];
    });
    this.api.getPost(this.id)
    .subscribe(res => {
        console.log('Got post " + this.id + " from API ' + this.api.getUrl());
        console.log('RESPONSE', res);
        this.post = res;
        this.xfbmlParse();
    }, error => {
        console.log('Error getting post ' + this.id + ' from API ' + this.api.getUrl());
        console.log('ERROR', error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  async xfbmlParse() {
    await this.delay(300); // wait a little bit while things are being rendered in the page
    if (window.FB) {
      window.FB.XFBML.parse(window.document.body, () => {
        console.log('Facebook components updated');
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
