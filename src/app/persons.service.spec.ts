import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { PersonsService } from './persons.service';
import { HttpEventType } from '@angular/common/http/src/response';

let service;

class HttpHandlerMock extends HttpHandler {
  handle(req) { 
    return Observable.from([])
  }
}
class HttpClientMock extends HttpClient {
  get(url: string) {
     return Observable.from([]);
  }
}

describe('PersonsService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PersonsService }
      ]
    });
    let handlerMock = new HttpHandlerMock();
    let clientMock = new HttpClientMock(handlerMock);
    service = new PersonsService(clientMock);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
