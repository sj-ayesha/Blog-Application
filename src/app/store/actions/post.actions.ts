import { Action } from '@ngrx/store';
import { Post } from '../../shared/models/post.model';

export enum PostActionTypes {
  LOAD_POST = '[POST] Load Post',
  LOAD_POST_SUCCESS = '[POST] Load Post Success',
  LOAD_POST_FAILURE = '[POST] Load Post Failure',
  ADD_POST = '[POST] Add Post',
  ADD_POST_SUCCESS = '[POST] Add Post Success',
  ADD_POST_FAILURE = '[POST] Add Post Failure',
  DELETE_POST = '[POST] Delete Post',
  DELETE_POST_SUCCESS = '[POST] Delete Post Success',
  DELETE_POST_FAILURE = '[POST] Delete Post Failure'
}

// Load Posts Actions
export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LOAD_POST;
}

export class LoadPostSuccessAction implements Action {
  readonly type = PostActionTypes.LOAD_POST_SUCCESS;

  constructor(public payload: Array<Post>) { }
}

export class LoadPostFailure implements Action {
  readonly type = PostActionTypes.LOAD_POST_FAILURE;

  constructor(public payload: Error) { }
}

// Add Posts Actions
export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_POST;

  constructor(public payload: Post) { }
}

export class AddPostSuccessAction implements Action {
  readonly type = PostActionTypes.ADD_POST_SUCCESS;

  constructor(public payload: Post) { }
}

export class AddPostFailureAction implements Action {
  readonly type = PostActionTypes.ADD_POST_FAILURE;

  constructor(public payload: Error) { }
}

// Delete Posts Actions
export class DeletePostAction implements Action {
  readonly type = PostActionTypes.DELETE_POST;

  constructor(public payload: string) { }
}

export class DeletePostSuccessAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_SUCCESS;

  constructor(public payload: string) { }
}

export class DeletePostFailureAction implements Action {
  readonly type = PostActionTypes.DELETE_POST_FAILURE;

  constructor(public payload: Error) { }
}

export type PostAction = LoadPostAction | LoadPostSuccessAction | LoadPostFailure |
  AddPostAction | AddPostSuccessAction | AddPostFailureAction |
  DeletePostAction | DeletePostSuccessAction | DeletePostFailureAction;
