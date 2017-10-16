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
    return this.http.post(api_url + "/login", obj)
      .map(res => {
        return res
      })
      .catch(this._errorHandler);
  }
  private _errorHandler(error: Response) {
    console.error("Error occured " + error);
    return Observable.throw(error || 'Something wrong happened on th server');
  }
  // private heroesUrl = 'api/heroes';
  // loginUser(obj): Promise<any> {
  //   return this.http.post(api_url + '/login', obj, this.options)
  //     .toPromise()
  //     .then(res => {
  //       return res
  //     })
  //     .catch(this.handleError);
  // }

  public handleError(error: any) {
    console.error('An error occurred', error);
    error['error'] = true;
    throw error;
  }

  // private handleErrorPromise(error: Response | any) {
  //   console.error(error.message || error);
  //   return Promise.reject(error.message || error);
  // }

  // private handleError(error: any) {
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }



  // public handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   error['error'] = true;
  //   throw error;
  // }


  // public handleError(error: any) {
  //   let errMsg = (error.message) ? error.message :
  //     error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }



}
