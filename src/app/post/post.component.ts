import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiserverService } from '../apiserver.service';
import { SafeHtmlPipe } from '../util/pipe.safehtml';
import { FacebookService } from 'ngx-facebook';
import { Post } from '../_interfaces/post';

declare var window: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  @ViewChild('loading') loading: ElementRef;
  id: string;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private api: ApiserverService) { }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.id = params['id'];
      this.api.getPost(this.id)
      .subscribe(res => {
        console.log('Got post ' + this.id + ' from API ' + this.api.getUrl());
        console.log('RESPONSE', res);
        this.post = res;
      }, error => {
        console.error('Error getting post ' + this.id + ' from API ' + this.api.getUrl());
        console.error('ERROR', error);
        this.loading.nativeElement.innerHTML = 'Error: Didn\'t connect to the API!';
      });
    });

  }

  ngOnDestroy() { }

}


