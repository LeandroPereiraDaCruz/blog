import { Component } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private fb: FacebookService) {
    console.log('Initializing Facebook');

    const initParams: InitParams = {
      appId    : '1973369569569674',
      xfbml    : true,
      version  : 'v2.10'
    };

    fb.init(initParams);
  }

  share(url: string){
    let params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share'
    }

    this.fb.ui(params)
    .then((res: UIResponse) => console.log(res))
    .catch((e:any) => console.error(e));
  }
}
