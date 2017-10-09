import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { AuthService  } from '../../services/auth.service';
import { IUser  } from '../../services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(public fb: FormBuilder, public as: AuthService) {
    this.myForm = fb.group({
      'email': [''],
      'password': [''],
      'confirmPassword': ['']

    })
  }

  ngOnInit() {
  }

  onSubmit(signupForm: IUser) {
    let form: IUser = {
      'email': signupForm.email,
      'password': signupForm.password,
      'confirmPassword': signupForm.confirmPassword
    }
    // console.log(form);

    if (signupForm.password === signupForm.confirmPassword) {

    this.as.signup(form);
    console.log(form);
    }
    else
    {
      console.log('Error 404');

    }

  }

}
