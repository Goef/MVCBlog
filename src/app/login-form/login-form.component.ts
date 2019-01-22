import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../core/auth.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'login-form.component',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class signInFormComponent implements OnInit {

  userForm: FormGroup;
  
  passReset = false; // set to true when password reset is triggered
  formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }



  signup(email:string , password:string) {
    this.auth.emailSignUp(email, password);
  }

  login() {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
  }

 

}