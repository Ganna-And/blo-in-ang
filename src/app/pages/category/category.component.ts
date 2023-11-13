import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categoryId?:any
  postsByCategory?:Array<any>;
  categoryName?: string

  constructor(private route: ActivatedRoute, private postService:PostService){
     this.route.params.subscribe(val=>{
      this.categoryId = val['id'];
      this.categoryName = val['name'];
      this.postService.loadByCategory(this.categoryId).subscribe(post=>{
      this.postsByCategory = post

    })
    }) 
  }

}
