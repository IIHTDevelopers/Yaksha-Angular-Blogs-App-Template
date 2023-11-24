import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-add-update-blog',
  templateUrl: './add-update-blog.component.html',
  styleUrls: ['./add-update-blog.component.css']
})
export class AddUpdateBlogComponent implements OnInit {
  blog: Blog = new Blog();
  isEditMode: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  saveBlog(): void {
  }
}
