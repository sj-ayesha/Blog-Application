import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { PostActionTypes,
  LoadPostAction, LoadPostActionSuccess, LoadPostActionFailure,
  AddPostAction, AddPostActionSuccess, AddPostActionFailure,
  DeletePostAction, DeletePostActionSucces, DeletePostActionFailure } from '../actions/posts.actions';

import { PostService } from '../../app/services/post.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {

  @Effect() loadPost$ = this.actions$
    .pipe(
      ofType<LoadPostAction>(PostActionTypes.LOAD_POST),
      mergeMap(
        () => this.shoppingService.getPostItems()
          .pipe(
            map(data => {
              return new LoadPostActionSuccess(data)
            }),
            catchError(error => of(new LoadPostActionFailure(error)))
          )
      )
    )

  @Effect() addPostItem$ = this.actions$
    .pipe(
      ofType<AddPostAction>(PostActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addPostItem(data.payload)
          .pipe(
            map(() => new AddPostActionSuccess(data.payload)),
            catchError(error => of(new AddPostActionFailure(error)))
          )
      )
    )

  @Effect() deletePostItem$ = this.actions$
    .pipe(
      ofType<DeletePostAction>(PostActionTypes.DELETE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deletePostItem(data.payload)
          .pipe(
            map(() => new DeletePostActionSucces(data.payload)),
            catchError(error => of(new DeletePostActionFailure(error)))
          )
      )
    )

  constructor(private actions$: Actions, private shoppingService: PostService) { }
}
