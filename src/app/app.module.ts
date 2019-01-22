import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule} from '@angular/fire/firebase.app.module'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { RouterModule, Routes } from '@angular/router'

import { environment } from '../environments/environment'
 
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { PostService} from './posts/post.service'
import { fromEventPattern } from 'rxjs';
import { signInFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/blog' , pathMatch: 'full'},
  {path: '', loadChildren: './posts/posts.module#PostsModule'},

]

@NgModule({
  declarations: [
    AppComponent,
    signInFormComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
   RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
    SharedModule,
    PostsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
