import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FilterPipe } from '../filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../post'
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  admin:string = "NkAcWPvzcnNLsMMZyic6SCmkVvG3"
  posts: Observable<Post[]>
  constructor(private postService: PostService, public auth: AuthService)  { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
  }
  
  delete(id: string){
    this.postService.delete(id)
  }
}

