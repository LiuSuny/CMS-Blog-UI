import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{

  //categories?: Category[];
  categories$?: Observable<Category[]>;


  constructor(private categoryService: CategoryService){
  
  }

  // ngOnInit(): void {
  //  this.getAllCategory();
  // }
  
  ngOnInit(): void {
     this.categories$ = this.categoryService.getAllCategories()
   }
   
  // getAllCategory(){
  //   return this.categoryService.getAllCategories().subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     }
  //   })
  // }
}
