import { Component, OnInit } from '@angular/core';
import { PostAppState } from 'src/store/models/post-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostItem } from 'src/store/models/post-item.models';
import { LoadPostAction } from 'src/store/actions/posts.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postItems$: Observable<Array<PostItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;

  constructor(private store: Store<PostAppState>) { }

  ngOnInit(): void {
    this.postItems$ = this.store.select(store => store.post.list);
    this.loading$ = this.store.select(store => store.post.loading);
    this.error$ = this.store.select(store => store.post.error);
    this.store.dispatch(new LoadPostAction());
  }

}
