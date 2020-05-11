import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { AppState } from 'src/app/shared/models/app-state.models';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { AddPostAction } from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Observable<Array<Post>>;
  newPost: Post = { id: '', title: '', description: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts = this.store.select(store => store.post);
  }

  addPost() {
    this.newPost.id = uuid();

    this.store.dispatch(new AddPostAction(this.newPost));

    this.newPost = { id: '', title: '', description: ''};
  }

}
