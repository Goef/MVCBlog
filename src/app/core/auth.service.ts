import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState : any = null


  constructor(public afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe(data => this.authState = data)

  }

  get authenticated(): boolean{
    return this.authState  !== null
  }
  
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut()
  }



  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }
}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}
