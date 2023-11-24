import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  loadBlogs(): void {
  }

  editBlog(blogId: number): void {
  }

  deleteBlog(blogId: number): void {
  }
}
