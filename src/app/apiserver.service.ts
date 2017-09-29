import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiserverService {

  constructor(private http:Http) { }

  getPosts(){
    return this.http.get('https://59cd2539c80b4a001175c447.mockapi.io/v1/posts?sortBy=id&order=desc')
    .map((res:Response)=>res.json());
  }
}
