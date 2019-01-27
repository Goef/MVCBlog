import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseOptionsToken} from '@angular/fire/'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { RouterModule, Routes } from '@angular/router'
import {FilterPipe} from './posts/filter.pipe'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { PostService} from './posts/post.service'
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FormsModule} from "@angular/forms"
import { MatIconModule, MatInputModule,MatAutocompleteModule, MatChipsModule, MatFormFieldModule} from '@angular/material';

const routes: Routes = [
  { path: '', redirectTo: '/blog' , pathMatch: 'full'},
  {path: 'adminpanel', pathMatch: 'full', component: AdminPanelComponent},
  {path: '', loadChildren: './posts/posts.module#PostsModule'},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AdminPanelComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
   RouterModule.forRoot(routes),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
    PostsModule,
    FormsModule,
    MatIconModule, MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    SharedModule,
    
  ],
  providers: [PostService, 
   { provide : FirebaseOptionsToken, useValue: environment.firebase}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
