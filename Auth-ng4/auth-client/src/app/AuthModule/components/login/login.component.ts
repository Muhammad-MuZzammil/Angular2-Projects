import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userSigninObj;
  loginForm: FormGroup;
  // loginFormObj;
  constructor(private fb: FormBuilder, private authService: AuthService) {

    this.loginForm = fb.group({
      'email': [''],
      'password': [''],
    });
  }

  ngOnInit() {
    // this.authService.loginUser().subscribe(res => this.userSigninObj = res.json().data[2])
  }

  submitForm(form) {
    var loginFormObj = {
      'email': form.email,
      'password': form.password
    };
    // console.log(this.loginFormObj);
    this.authService.loginUser(loginFormObj)
      .subscribe(res => {
        console.log(res.json());
      })



  }
}
