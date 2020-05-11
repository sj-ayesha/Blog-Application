import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.model';

export enum PostActionTypes {
  ADD_POST = '[POST] Add Post',
}

export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_POST;
  constructor(public payload: Post) {}
}

export type PostAction = AddPostAction;
