import { PostActionTypes, PostAction } from '../actions/post.actions';
import { Post } from '../../shared/models/post.model';

const initialState: Array<Post> = [
  {
    id: '1',
    title: 'Diet Coke',
    description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
  }
];

export function PostReducer(state: Array<Post> = initialState, action: PostAction) {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
}
