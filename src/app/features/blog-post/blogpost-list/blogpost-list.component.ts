import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit{


  blogPosts$?: Observable<BlogPost[]>;
  
  constructor(private blogPostService: BlogPostService) {
  }
  ngOnInit(): void {
    // get all blog posts from API
    this.blogPosts$ = this.blogPostService.getAllBlogPosts();
  }

}
