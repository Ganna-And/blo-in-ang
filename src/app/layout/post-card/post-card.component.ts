import { Component,Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() postData:any;

  constructor(private postService: PostService){}

  incrementViews(postId:number){
    this.postService.updateViews(postId)
   }
  
}
