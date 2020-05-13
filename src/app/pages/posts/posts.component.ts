import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostAppState } from 'src/store/models/post-state.model';
import { Observable } from 'rxjs';
import { PostItem } from 'src/store/models/post-item.models';
import { AddPostAction, DeletePostAction, LoadPostAction } from 'src/store/actions/posts.actions';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postItems$: Observable<Array<PostItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newPostItem: PostItem = { id: '', title: '', description: '' };


  constructor(private store: Store<PostAppState>) { }

  ngOnInit(): void {

    this.postItems$ = this.store.select(store => store.post.list);
    this.loading$ = this.store.select(store => store.post.loading);
    this.error$ = this.store.select(store => store.post.error);


    this.store.dispatch(new LoadPostAction());
  }

  addItem() {

    this.newPostItem.id = uuid();
    this.store.dispatch(new AddPostAction(this.newPostItem));

    this.newPostItem = { id: '', title: '', description: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeletePostAction(id));
  }
}
