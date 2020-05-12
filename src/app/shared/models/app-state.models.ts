import { PostState } from 'src/app/store/reducers/post.reducer';

export interface AppState {
  readonly post: PostState;
}
