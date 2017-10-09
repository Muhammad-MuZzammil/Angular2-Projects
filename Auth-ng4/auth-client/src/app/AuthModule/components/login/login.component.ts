import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginFormObj;
  constructor(private fb: FormBuilder) {

    this.loginForm = fb.group({
      'email': [''],
      'password': [''],
    });
  }

  ngOnInit() {
  }

  submitForm(form) {
    this.loginFormObj = {
      'email': form.email,
      'password': form.password
    };
    console.log(this.loginFormObj);
  }
}
