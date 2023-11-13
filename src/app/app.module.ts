import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavForCategoryComponent } from './layout/nav-for-category/nav-for-category.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { CategoryComponent } from './pages/category/category.component';
import { PostComponent } from './pages/post/post.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PostCardComponent } from './layout/post-card/post-card.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'envirenments/envirenment.prod';
import {  AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {FormsModule}from'@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavForCategoryComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    TermsAndConditionsComponent,
    CategoryComponent,
    PostComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
