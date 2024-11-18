import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  standalone: true,
  template: `
    <h1>Posts</h1>
    <ul>
      @for (post of posts; track post.id) {
      <li>{{ post.title }}</li>
      }
    </ul>
  `,
})
export class PostsComponent {
  posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
  ];
}