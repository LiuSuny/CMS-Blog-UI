import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './features/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blog-post/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './features/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './features/public/home/home.component';
import { BlogDetailsComponent } from './features/public/blog-details/blog-details.component';
import { guardGuard } from './features/auth/guards/guard.guard';
import { LoginComponent } from './features/auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/categories',
    component: CategoryListComponent, canActivate: [guardGuard]
  },
  
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent, canActivate: [guardGuard]
  },
  {
    path: 'admin/categories/:id',
    component: EditCategoryComponent, canActivate: [guardGuard]
  },
  {
    path: 'admin/blogposts',
    component: BlogpostListComponent, canActivate: [guardGuard]
  },
  {
    path: 'admin/blogposts/add',
    component: AddBlogpostComponent, canActivate: [guardGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/:url',
    component: BlogDetailsComponent
  },
  {
    path: 'admin/blogposts/:id',
    component: EditBlogpostComponent, canActivate: [guardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
