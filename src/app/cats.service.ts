import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ItemsResponse from '../typings/ItemsResponse';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/retry';

@Injectable()
export class CatsService {

  constructor(private httpService: HttpClient) {
  }
 
  public getCats() : Observable<Object[]> {
    return this.httpService.get<Object[]>('http://agl-developer-test.azurewebsites.net/people.json')
  }

}
