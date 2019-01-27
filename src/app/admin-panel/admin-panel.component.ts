import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import {Post} from '../posts/post'
import { Observable } from 'rxjs/Observable';
import { PostService } from '../posts/post.service';
import { FilterPipe } from '../posts/filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})

export class AdminPanelComponent implements OnInit {
  admin:string = "NkAcWPvzcnNLsMMZyic6SCmkVvG3"
  posts: Observable<Post[]>

  constructor(
    public auth: AuthService,
    private postService: PostService
  ) { }
  ngOnInit() {
    this.posts = this.postService.getPosts()
  }
  active(id:string , active:boolean){
    const formData={
      active: active
    }
    if( active == true) {
      this.postService.update(id,formData)
    } if( active == false) {
      this.postService.update(id,formData)
  }
  }
}
