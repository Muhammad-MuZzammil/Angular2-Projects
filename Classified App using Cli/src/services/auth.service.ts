import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

export interface IUser {
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable()
export class AuthService {

  constructor(public af: AngularFire, public auth: FirebaseAuth) { }

  signup(userForm: IUser) {
    this.af.auth.createUser(userForm);
  }

  login(userLogin: IUser): Pormise<boolean> {
    var res: Pormise<boolean> = new Promise((resolve, reject) => {
      this.auth.login(userLogin).then(result => {
        resolve(result);
      })
    })
    return res;
  }
}
