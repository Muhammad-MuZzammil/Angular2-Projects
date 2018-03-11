import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { api_url } from './API_URL';



@Injectable()
export class AuthService {

  constructor(private http: Http, private router: Router) { }
  private headers = new Headers({ 'Content-Type': 'application/json' });

  options = new RequestOptions({
    headers: this.headers
  });

  loginUser(obj): Observable<any> {
    return this.http.post(api_url + '/login', obj)
      .map(res => {
        return res
      })
      .catch(this._errorHandler);
  }
  private _errorHandler(error: Response) {
    console.error("Error occured " + error);
    return Observable.throw(error || 'Something wrong happened on th server');
  }





}
