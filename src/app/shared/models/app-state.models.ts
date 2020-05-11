import { Post } from './post.model';

export interface AppState {
  readonly post: Array<Post>
}
