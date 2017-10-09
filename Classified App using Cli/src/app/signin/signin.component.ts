import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import {  AngularFire  } from 'angularfire2';
import {  Router  } from '@angular/router';

import { AuthService  } from '../../services/auth.service';
import { IUser  } from '../../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  loaderSignIn: boolean = false;

  constructor(private fb: FormBuilder, private af: AngularFire, private as: AuthService, private router:Router) {

    this.myForm = fb.group({
      'email': [''],
      'password': [''],

    })
  }

  ngOnInit() {
  }

  onSubmit(signinForm: IUser) {
    this.loaderSignIn = true;
    this.as.login(signinForm)
    .then(res => {
      if (res.provider === 4) {
    this.loaderSignIn = false;
    this.router.navigate(['/handi'])
      console.log(res);
    
      }
    
    })
    console.log(signinForm);

  }

}
