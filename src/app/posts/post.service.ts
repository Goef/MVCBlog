import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Post } from './post'
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

  postsCollection: AngularFirestoreCollection<Post>
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc'))
  }

  getPostsById(id:string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPosts() {
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }

  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPost(id:string){
    return this.afs.doc<Post>(`posts/${id}`)
  }

  create(data:Post){
    console.log(data)
    var post = JSON.parse(JSON.stringify(data));
    this.postsCollection.add(post)
  }
  delete(id :string){
    return this.getPost(id).delete()
  }

  update(id:string , formData){
    return this.getPost(id).update(formData)
  }
}
