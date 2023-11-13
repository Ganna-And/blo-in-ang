import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from '../model/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  alreadySubscribed:boolean= false;

  constructor(private afs: AngularFirestore) { }

  addSubscriber(subscription:Subscription){

   return this.afs.collection('subscriptions').add(subscription).then(docRef=>{
      console.log(docRef)
    })
  }

  duplicateEmailCheck(email:string){
   return this.afs.collection('subscriptions', ref=> ref.where('email', '==', email)).get()
  }
}
