import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { api_url } from './API_URL';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  loginUser(obj) {
    return this.http.post(api_url + "/login", obj)
      .map((res: Response) => {
        return res;
      })
      .catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    console.error("Error occured" + error);
    return Observable.throw(error || 'Something wrong happened on th server');
  }

}
