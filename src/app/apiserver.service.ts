import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiserverService {

  constructor(private http: Http) { }

  private readonly url = 'https://59cd2539c80b4a001175c447.mockapi.io/v1/';

  getPosts(options: string = '') {
    return this.http.get(this.url + 'posts' + options)
    .map((res: Response) => res.json());
  }

  getPost(id: string) {
    return this.http.get(this.url + 'posts/' + id)
    .map((res: Response) => res.json());
  }

  getUrl() {
      return this.url;
  }
}
