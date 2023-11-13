import { Component } from '@angular/core';
import { SubscriptionsService } from '../services/subscriptions.service';
import { Subscription } from '../model/subscription';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

emailDuplicated:boolean= false;
subscribed:boolean=false;


  constructor(private subService: SubscriptionsService){

  }

  onSubmit(formValues:any){
 const subscription:Subscription ={
  name:formValues.name,
  email:formValues.email
 }
this.subService.duplicateEmailCheck(subscription.email).subscribe(val=>{
  console.log(val)
  if(val.empty){
    this.subService.addSubscriber(subscription);
    this.subscribed = true;
  }
  else{
   this.emailDuplicated = true;
  }
})
 
  }



}
