import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from'firebase/compat/app'


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afc: AngularFirestore, private firestore:AngularFirestoreModule) { }

  loadFeatured(){
    return this.afc.collection('post', ref=> ref.where('isFeatured', "==", true).limit(4)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id
        return{id, data}
      })
    }))
  }
  loadLatest(){
    return this.afc.collection('post', ref=> ref.orderBy('createdAt', 'desc' ).limit(3)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id
        return{id, data}
      })
    }))
  }
  loadByCategory(categoryId:string){
    return this.afc.collection('post', ref=> ref.where('category.categoryId','==', categoryId).limit(4)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id
        return{id, data}
      })
    }))
  }
  loadOnePost(postId:string){
    return this.afc.doc(`post/${postId}`).valueChanges()
  }

loadSimilar(catId:string){
    return this.afc.collection('post', ref=> ref.where('category.categoryId','==', catId).limit(4)).snapshotChanges().pipe(map(actions=>{
      return actions.map(a=>{
        const data = a.payload.doc.data();
        const id = a.payload.doc.id
        return{id, data}
      })
    }))
  }
  
  updateViews(postId:number){
const views= {
  views: firebase.default.firestore.FieldValue.increment(1)
}
    this.afc.doc(`post/${postId}`).update(views)
  }

}
