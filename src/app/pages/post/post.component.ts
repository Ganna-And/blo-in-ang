import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

singlePost:any;
postArray?:Array<any>;
similarPosts?:Array<any>


constructor(private postService: PostService, private route: ActivatedRoute){
}

ngOnInit(){
  this.route.params.subscribe(val=>{
    this.postService.loadOnePost(val['id']).subscribe(post=>{
      this.singlePost = post;
      this.loadSimilarPost(this.singlePost.category.categoryId);
      
    })
  })
}

loadSimilarPost(catId:string){
  this.postService.loadSimilar(catId).subscribe(val=>{
    this.similarPosts = val
  })
}



}
