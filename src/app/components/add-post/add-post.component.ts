import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.models';
import { v4 as uuid } from 'uuid';
import { AddPostAction } from 'src/app/store/actions/post.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  newPost: Post = {id: '', title: '', description: ''};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  addPost() {
    this.newPost.id = uuid();

    this.store.dispatch(new AddPostAction(this.newPost));

    this.newPost = { id: '', title: '', description: ''};
  }

}
