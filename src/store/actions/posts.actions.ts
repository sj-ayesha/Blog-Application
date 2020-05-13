import { Action } from '@ngrx/store';
import { PostItem } from '../models/post-item.models';

export enum PostActionTypes {
  LOAD_POST = '[POST] Load Post',
  LOAD_POST_SUCCESS = '[POST] Load Post Success',
  LOAD_POST_FAILURE = '[POST] Load Post Failure',

  ADD_ITEM = '[POST] Add Item',
  ADD_ITEM_SUCCESS = '[POST] Add Item Success',
  ADD_ITEM_FAILURE = '[POST] Add Item Failure',

  DELETE_ITEM = '[POST] Delete Item',
  DELETE_ITEM_SUCCESS = '[POST] Delete Item Success',
  DELETE_ITEM_FAILURE = '[POST] Delete Item Failure',
}

// LOAD ACTIONS
export class LoadPostAction implements Action {
  readonly type = PostActionTypes.LOAD_POST;
}

export class LoadPostActionSuccess implements Action {
  readonly type = PostActionTypes.LOAD_POST_SUCCESS;

  constructor(public payload: Array<PostItem>) { }
}

export class LoadPostActionFailure implements Action {
  readonly type = PostActionTypes.LOAD_POST_FAILURE;

  constructor(public payload: Error) { }
}

// ADD ITEM ACTIONS
export class AddPostAction implements Action {
  readonly type = PostActionTypes.ADD_ITEM;

  constructor(public payload: PostItem) { }
}

export class AddPostActionSuccess implements Action {
  readonly type = PostActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: PostItem) { }
}

export class AddPostActionFailure implements Action {
  readonly type = PostActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) { }
}

// DELETE ITEM ACTIONS
export class DeletePostAction implements Action {
  readonly type = PostActionTypes.DELETE_ITEM;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export class DeletePostActionSucces implements Action {
  readonly type = PostActionTypes.DELETE_ITEM_SUCCESS;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export class DeletePostActionFailure implements Action {
  readonly type = PostActionTypes.DELETE_ITEM_FAILURE;

  // payload will be id since we are deleting according to id
  constructor(public payload: string) { }
}

export type PostAction = LoadPostAction | LoadPostActionSuccess | LoadPostActionFailure |
  AddPostAction | AddPostActionSuccess | AddPostActionFailure |
  DeletePostAction | DeletePostActionSucces | DeletePostActionFailure;
