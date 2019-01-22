import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { Post } from '../post';
import { finalize } from 'rxjs/operators';




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
      const post = new Post(
        this.auth.authState.displayName || this.auth.authState.email,
        this.auth.currentUserId,
        this.content,
        this.image || null,
        new Date(),
        this.title
  
      );
      this.postService.create(post)
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
        task.snapshotChanges().pipe(
          finalize(() => {
            this.downloadURL = ref.getDownloadURL()
            this.downloadURL.subscribe(url => (this.image = url));
          })
        )
        .subscribe();
      

        
        
    

      }

       
        


    }
  }
   

