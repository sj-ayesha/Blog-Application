import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { PostItem } from 'src/store/models/post-item.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private POST_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) { }

  getPostItems() {
    return this.http.get<PostItem[]>(this.POST_URL)
      .pipe(
        delay(500)
      );
  }

  addPostItem(postItem: PostItem) {
    return this.http.post(this.POST_URL, postItem)
      .pipe(
        delay(500)
      );
  }

  deletePostItem(id: string) {
    return this.http.delete(`${this.POST_URL}/${id}`)
      .pipe(
        delay(500)
      );
  }
}
