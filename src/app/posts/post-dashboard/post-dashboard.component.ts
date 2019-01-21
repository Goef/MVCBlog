import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title:string
  image:string = null
  content:string
  buttonText: string = "Create Post"

  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  constructor(private auth:AuthService, private postService: PostService,private storage: AngularFireStorage) { }

  ngOnInit() {
  }

    createPost() {
      const data = {
        author: this.auth.authState.displayName || this.auth.authState.email,
        authorId: this.auth.currentUserId,
        content: this.content,
        image: this.image || null,
        published: new Date(),
        title: this.title
  
      };
      
      this.postService.create(data)
      this.title = ''
      this.content=''
      this.buttonText= 'Post Created!'
      setTimeout(() => this.buttonText = "Create Post" , 2000)
    }



    uploadImage(event){
      const file = event.target.files[0]
      const path = `posts/${file.name}`

      if(file.type.split('/')[0] !== 'image'){
        return alert("only image files")
      } else{
        const task = this.storage.upload(path, file);
        const ref = this.storage.ref(path);


        this.uploadPercent = task.percentageChanges();

        console.log('Image uploaded!')
        console.log("hoi")
        this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => this.image = url)
    

      }

       
        


    }

   
}
