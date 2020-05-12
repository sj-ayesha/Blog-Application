import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { AppState } from 'src/app/shared/models/app-state.models';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { AddPostAction, DeletePostAction, LoadPostAction } from 'src/app/store/actions/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  // Display List of Posts
  posts: Observable<Array<Post>>;

  loading$ : Observable<Boolean>;
  error$: Observable<Error>;

  newPost: Post = {id: '', title: '', description: ''};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // Display List of Posts
    this.posts = this.store.select(store => store.post.list);
    this.loading$ = this.store.select(store => store.post.loading);
    this.error$ = this.store.select(store => store.post.error);

    this.store.dispatch(new LoadPostAction());
  }

  onDeletePost(id: string) {
    this.store.dispatch(new DeletePostAction(id));
  }
}
