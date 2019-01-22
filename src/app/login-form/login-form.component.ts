import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../core/auth.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'login-form.component',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class signInFormComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
    signedUp :boolean = false;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }



  signup(email:string , password:string) {
    this.auth.emailSignUp(email, password);
    this.signedUp = true
  }

}