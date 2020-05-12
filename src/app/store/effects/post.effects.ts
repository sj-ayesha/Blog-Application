import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostActionTypes,
  LoadPostAction, LoadPostSuccessAction, LoadPostFailure,
  AddPostAction, AddPostSuccessAction, AddPostFailureAction,
  DeletePostAction, DeletePostSuccessAction, DeletePostFailureAction} from '../actions/post.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { PostsService } from '../../shared/services/posts.service';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {

  @Effect() loadPost$ = this.actions$
    .pipe(
      ofType<LoadPostAction>(PostActionTypes.LOAD_POST),
      mergeMap(
        () => this.postService.getPosts()
          .pipe(
            map((data: any) => {
              return new LoadPostSuccessAction(data)
            }),
            catchError(error => of(new LoadPostFailure(error)))
          )
      )
    )

  @Effect() addPost$ = this.actions$
    .pipe(
      ofType<AddPostAction>(PostActionTypes.ADD_POST),
      mergeMap(
        (data) => this.postService.addPost(data.payload)
          .pipe(
            map(() => new AddPostSuccessAction(data.payload)),
            catchError(error => of(new AddPostFailureAction(error)))
          )
      )
    )

  @Effect() deletePost$ = this.actions$
    .pipe(
      ofType<DeletePostAction>(PostActionTypes.DELETE_POST),
      mergeMap(
        (data) => this.postService.deletePost(data.payload)
          .pipe(
            map(() => new DeletePostSuccessAction(data.payload)),
            catchError(error => of(new DeletePostFailureAction(error)))
          )
      )
    )

  constructor(private actions$: Actions, private postService: PostsService) { }
}

