import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-nav-for-category',
  templateUrl: './nav-for-category.component.html',
  styleUrls: ['./nav-for-category.component.css']
})
export class NavForCategoryComponent {

  categoryArray?:Array<any>; 


  constructor(private categoryService: CategoriesService){
    categoryService.loadData().subscribe(val=>{
      this.categoryArray = val
    })
  }

  



}
