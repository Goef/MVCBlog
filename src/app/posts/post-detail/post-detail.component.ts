import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post'
import { AuthService } from 'src/app/core/auth.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  admin: string = "NkAcWPvzcnNLsMMZyic6SCmkVvG3"
  post: Post
  editing: boolean = false
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPost()
    console.log(this)
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.update(id, formData)
    this.editing = false
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id')
    return this.postService.getPostData(id).subscribe(data => this.post = data)
  }
  delete() {
    const id = this.route.snapshot.paramMap.get("id");
    this.postService.delete(id)
    this.router.navigate(["/blog"])
  }
}
