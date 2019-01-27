import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'login-form.component',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  email: string
  password: string
  signedUp :boolean = false;
  constructor(private auth: AuthService) { }
  loggedIn: boolean = false;

  ngOnInit() {
  }

  signup(email:string , password:string) {
    this.auth.emailSignUp(email, password)
    this.signedUp = true
    alert("your account has been created, welcome to the family :)")
    // window.location.href ="/mvc" this is for prod
    // window.location.href ="/" this is for dev
    setTimeout(function(){window.location.href ="/mvc"  }, 2000); // prod
   
  }

}