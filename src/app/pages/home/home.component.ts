import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPosts?:Array<any>
  latestPosts?:Array<any>

  constructor(private postService: PostService){
postService.loadFeatured().subscribe(val=>{
  this.featuredPosts = val
})

postService.loadLatest().subscribe(val=>{
this.latestPosts = val
})
  }

}
