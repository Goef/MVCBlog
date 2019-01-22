import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginForm: boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }


  login(email:string , password:string) {
    this.auth.emailLogin(email, password);
    this.loginForm= false;
  }
}
