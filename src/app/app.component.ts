import { Component } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private fb:FacebookService) {
      
    console.log("Initializing Facebook");

    let initParams: InitParams = {
      appId    : '1973369569569674',
      xfbml    : true,
      version  : 'v2.10'
    };

    fb.init(initParams);
  }
}
