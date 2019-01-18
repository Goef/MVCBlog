import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'
import {Post} from './post'
import 'rxjs/add/operator/map'

@Injectable()
export class PostService {

  postsCollection: AngularFirestoreCollection<Post>

  constructor(private afs: AngularFirestore) { 


    this.postsCollection = this.afs.collection('posts', ref =>
    ref.orderBy('published', 'desc'))
    
  }

  getPosts(){
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return{ id, ...data}
      })
    })
  }
}
