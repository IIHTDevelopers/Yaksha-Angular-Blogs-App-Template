import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogsComponent {
  blogs: any[] = [
    { id: 1, title: 'Sample Title', content: 'Sample Content', date: '2023-11-26', author: 'John Doe' }
  ];
  showForm: boolean = false;
  blogTitle: string = '';
  blogContent: string = '';
  blogAuthor: string = '';
  blogDate: string = '';
  editing: boolean = false;
  editingBlog: any = null;

  toggleForm() {
  }

  editBlog(blog: any) {
  }

  deleteBlog(blog: any) {
  }

  saveBlog() {
  }
}
