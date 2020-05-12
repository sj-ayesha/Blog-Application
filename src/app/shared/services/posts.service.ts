import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private POSTS_URL = 'https://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.POSTS_URL)
      .pipe(
        delay(500)
      );
  }

  addPost(postItem: Post) {
    return this.http.post(this.POSTS_URL, postItem)
      .pipe(
        delay(500)
      );
  }

  deletePost(id: string) {
    return this.http.delete(`${this.POSTS_URL}/$${id}`)
      .pipe(
        delay(500)
      );
  }
}
