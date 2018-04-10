import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { Http, BaseRequestOptions, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
